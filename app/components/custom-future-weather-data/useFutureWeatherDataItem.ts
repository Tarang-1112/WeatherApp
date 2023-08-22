import {useContext} from 'react';
import {THEMECONTEXT} from '../../App';
import {Colors} from '../../themes';

const useFutureWeatherDataItem = () => {
  const {theme} = useContext(THEMECONTEXT);

  const dynamicFutureWeatherDataItemStyle = {
    rootViewStyle: {
      backgroundColor: theme === 'dark' ? Colors.darkGrey : Colors.skyBlue,
    },
    timeTextStyle: {
      color: theme === 'dark' ? Colors.grey : Colors.black,
    },
    degreeTextStyle: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    degreeOuterViewStyle: {
      backgroundColor: theme === 'dark' ? Colors.white : Colors.black,
    },
    degreeInnerViewStyle: {
      backgroundColor: theme === 'dark' ? Colors.black : Colors.skyBlue,
    },
  };

  return {
    dynamicFutureWeatherDataItemStyle,
  };
};

export default useFutureWeatherDataItem;
