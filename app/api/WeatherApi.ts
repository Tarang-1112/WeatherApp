import axios, {AxiosInstance} from 'axios';
import {CurrentWeather} from '../types';
import {EndPoint} from '../constants';

const weatherInstance: AxiosInstance = axios.create({
  baseURL: EndPoint.baseUrl,
});

const getCurrentWeather = async (
  endPoint: string,
): Promise<CurrentWeather | boolean> => {
  try {
    const res = await weatherInstance.get(endPoint);
    return res?.data;
  } catch (e) {
    return false;
  }
};

const getFutureWeather = async (
  endPoint: string,
): Promise<{list: CurrentWeather[]} | boolean> => {
  try {
    const res = await weatherInstance.get(endPoint);
    return res?.data;
  } catch (e) {
    return false;
  }
};

export {getCurrentWeather, getFutureWeather};
