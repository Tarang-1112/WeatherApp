import {useContext} from 'react';
import {THEMECONTEXT} from '../../App';
import {Colors} from '../../themes';

const useWeatherPropertyItem = () => {
  const {theme} = useContext(THEMECONTEXT);

  const dynamicWeatherPropertyStyle = {
    valueTextStyle: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
    propertyTextStyle: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
  };

  return {
    dynamicWeatherPropertyStyle,
  };
};

export default useWeatherPropertyItem;
