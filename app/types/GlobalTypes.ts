export interface CurrentLocation {
  longitude: number;
  latitude: number;
}

export interface CurrentWeather {
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    },
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  name: string;
  dt_txt: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
}
