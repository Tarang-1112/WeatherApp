export const apiReject = Object.freeze({
  title: 'Sorry',
  message: 'Something went wrong.',
  locationError: "Can't Find User's Current Location",
});

export const sliceName = Object.freeze({
  weather: 'weather',
});

export const homeScreenString = Object.freeze({
  todayWeather: "Today's Weather",
  tomorrowWeather: "Tomorrow's Weather",
  nextWeather: "Next 3 Days' Weather",
  wind: 'Wind',
  humidity: 'Humidity',
  pressure: 'Pressure',
});

export const useLocationPermissionResults = Object.freeze({
  denied: 'The permission has not been requested / is denied but request able',
  unavailable:
    'This feature is not available (on this device / in this context)',
  limited: 'The permission is limited: some actions are possible',
  granted: 'The permission is granted',
  blocked: 'The permission is denied and not requestable anymore',
  openSettings: 'Open Settings',
});
