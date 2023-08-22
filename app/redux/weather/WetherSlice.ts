import {Draft, PayloadAction, Slice, createSlice} from '@reduxjs/toolkit';
import {sliceName} from '../../constants';
import {CurrentLocation, CurrentWeather} from '../../types';

interface WeatherInitialState {
  currentLocation: CurrentLocation;
  currentWeather: CurrentWeather;
  futureWeatherData: CurrentWeather[];
  loader: boolean;
}

const initialState: WeatherInitialState = {
  currentLocation: {} as CurrentLocation,
  currentWeather: {} as CurrentWeather,
  futureWeatherData: [],
  loader: true,
};

const weatherSlice: Slice<WeatherInitialState> = createSlice({
  name: sliceName.weather,
  initialState: initialState,
  reducers: {
    setLoaderValue: (
      state: Draft<WeatherInitialState>,
      action: PayloadAction<boolean>,
    ) => {
      state.loader = action?.payload;
    },
    setCurrentLocation: (
      state: Draft<WeatherInitialState>,
      action: PayloadAction<CurrentLocation>,
    ) => {
      state.loader = true;
      state.currentLocation = action?.payload;
    },
    setCurrentWeather: (
      state: Draft<WeatherInitialState>,
      action: PayloadAction<CurrentWeather>,
    ) => {
      state.currentWeather = action?.payload;
      state.loader = false;
    },
    setFutureWeatherData: (
      state: Draft<WeatherInitialState>,
      action: PayloadAction<{list: CurrentWeather[]}>,
    ) => {
      state.futureWeatherData = action?.payload?.list;
      state.loader = false;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
export const weatherActions = weatherSlice.actions;
