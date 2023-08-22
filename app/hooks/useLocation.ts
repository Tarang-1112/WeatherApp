import {Alert, BackHandler, Linking} from 'react-native';
import GetLocation from 'react-native-get-location';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import {useDispatch} from 'react-redux';
import {apiReject, useLocationPermissionResults} from '../constants';
import {weatherActions} from '../redux';
import {globalMetrics} from '../themes';
import {CurrentLocation} from '../types';

const useLocation = () => {
  const dispatch = useDispatch();

  const blockedPermissionHandler = (): void => {
    Alert.alert(
      apiReject.title,
      useLocationPermissionResults.blocked,
      [
        {
          text: useLocationPermissionResults.openSettings,
          onPress: () => Linking.openSettings(),
        },
      ],
      {cancelable: true},
    );
  };
  const getCurrentLocation = (): void => {
    dispatch(weatherActions.setLoaderValue(true));
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        const currentLocation: CurrentLocation = {
          longitude: location.longitude,
          latitude: location.latitude,
        };
        dispatch(weatherActions.setCurrentLocation(currentLocation));
      })
      .catch(() => {
        Alert.alert(apiReject.title, apiReject.locationError);
      });
  };
  const getLocationPermission = (): void => {
    check(
      globalMetrics.isIos
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert(apiReject.title);
          break;
        case RESULTS.DENIED:
          request(
            globalMetrics.isIos
              ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
              : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ).then(res => {
            switch (res) {
              case RESULTS.GRANTED:
                getCurrentLocation();
                break;
              case RESULTS.DENIED:
                BackHandler.exitApp();
                break;
              case RESULTS.BLOCKED:
                blockedPermissionHandler();
                break;
            }
          });
          break;
        case RESULTS.LIMITED:
          Alert.alert(apiReject.title);
          break;
        case RESULTS.GRANTED:
          getCurrentLocation();
          break;
        case RESULTS.BLOCKED:
          blockedPermissionHandler();
          break;
      }
    });
  };

  return {
    getLocationPermission,
  };
};

export default useLocation;
