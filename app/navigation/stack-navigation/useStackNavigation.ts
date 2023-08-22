import {useEffect} from 'react';
import {useLocation} from '../../hooks';

const useStackNavigation = () => {
  const {getLocationPermission} = useLocation();

  useEffect(() => {
    getLocationPermission();
  }, []);
};

export default useStackNavigation;
