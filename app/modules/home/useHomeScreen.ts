import {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {THEMECONTEXT} from '../../App';
import {getCurrentWeather, getFutureWeather} from '../../api';
import {EndPoint} from '../../constants';
import {RootState, weatherActions} from '../../redux';
import {Colors} from '../../themes';
import {CurrentWeather} from '../../types';

const useHomeScreen = () => {
  const dispatch = useDispatch();
  const {theme, setTheme} = useContext(THEMECONTEXT);
  const currentLocation = useSelector(
    (state: RootState) => state.weather?.currentLocation!,
  );
  const currentWeather = useSelector(
    (state: RootState) => state.weather?.currentWeather!,
  );
  const futureWeather = useSelector(
    (state: RootState) => state.weather?.futureWeatherData!,
  );
  const weatherLoader = useSelector(
    (state: RootState) => state.weather?.loader!,
  );

  const todayDate: Date = new Date();

  const setCurrentWeather = async (): Promise<boolean | CurrentWeather> => {
    const weather = await getCurrentWeather(
      `${EndPoint.weather}?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&appid=${EndPoint.apiKey}`,
    );

    return weather;
  };

  const setFutureWeather = async (): Promise<
    boolean | {list: CurrentWeather[]}
  > => {
    const weather = await getFutureWeather(
      `${EndPoint.forecast}?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&appid=${EndPoint.apiKey}`,
    );

    return weather;
  };

  const themeChangeHandler = (): void => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const dynamicHomeScreenStyle = {
    rootContainerStyle: {
      backgroundColor: theme === 'dark' ? Colors.black : Colors.lightBlue,
    },
    cityNameStyle: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    temperatureTextStyle: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    degreeOuterViewStyle: {
      backgroundColor: theme === 'dark' ? Colors.white : Colors.black,
    },
    degreeInnerViewStyle: {
      backgroundColor: theme === 'dark' ? Colors.black : Colors.lightBlue,
    },
    weatherPropertyViewStyle: {
      backgroundColor: theme === 'dark' ? Colors.darkGrey : Colors.skyBlue,
    },
  };

  useEffect(() => {
    Promise.all([setCurrentWeather(), setFutureWeather()]).then(values => {
      if (!values[0] || !values[1]) {
        dispatch(weatherActions.setLoaderValue(true));
        return;
      }

      dispatch(weatherActions.setCurrentWeather(values[0]));
      dispatch(weatherActions.setFutureWeatherData(values[1]));
    });
  }, [currentLocation]);

  return {
    currentLocation,
    currentWeather,
    todayDate,
    futureWeather,
    weatherLoader,
    themeChangeHandler,
    theme,
    dynamicHomeScreenStyle,
  };
};

export default useHomeScreen;
