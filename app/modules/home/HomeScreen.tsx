import React from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../assets';
import {ListView, WeatherPropertyItem} from '../../components';
import {homeScreenString} from '../../constants';
import {Colors, moderateScale} from '../../themes';
import {styles} from './HomeScreenStyle';
import useHomeScreen from './useHomeScreen';

const HomeScreen = (): React.JSX.Element => {
  const {
    currentWeather,
    todayDate,
    futureWeather,
    weatherLoader,
    theme,
    themeChangeHandler,
    dynamicHomeScreenStyle,
  } = useHomeScreen();

  return (
    <SafeAreaView
      style={StyleSheet.flatten([
        styles.rootContainerStyle,
        dynamicHomeScreenStyle.rootContainerStyle,
      ])}>
      {weatherLoader ? (
        <View style={styles.indicatorViewStyle}>
          <ActivityIndicator size={moderateScale(50)} color={Colors.white} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cityThemeViewStyle}>
            <View>
              <Text
                style={StyleSheet.flatten([
                  styles.cityNameStyle,
                  dynamicHomeScreenStyle.cityNameStyle,
                ])}>
                {currentWeather?.name}
              </Text>
              <Text style={styles.dateTextStyle}>
                {todayDate.toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.themeImageViewStyle}
              onPress={themeChangeHandler}>
              <Image
                source={theme === 'dark' ? Images.light : Images.dark}
                style={styles.themeImageStyle}
                tintColor={theme === 'dark' ? Colors.white : Colors.black}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.temperatureWeatherViewStyle}>
            <View>
              <View style={styles.degreeIconViewStyle}>
                <Text
                  style={StyleSheet.flatten([
                    styles.temperatureTextStyle,
                    dynamicHomeScreenStyle.temperatureTextStyle,
                  ])}>
                  {(currentWeather?.main?.temp - 273.15).toFixed()}
                </Text>
                <View
                  style={StyleSheet.flatten([
                    styles.degreeOuterViewStyle,
                    dynamicHomeScreenStyle.degreeOuterViewStyle,
                  ])}>
                  <View
                    style={StyleSheet.flatten([
                      styles.degreeInnerViewStyle,
                      dynamicHomeScreenStyle.degreeInnerViewStyle,
                    ])}
                  />
                </View>
              </View>
              <Text style={styles.weatherDescriptionTextStyle}>
                {currentWeather?.weather?.[0]?.description}
              </Text>
            </View>
            <>
              <View style={styles.weatherImageViewStyle}>
                <Image
                  style={styles.weatherImageStyle}
                  source={{
                    uri: `https://openweathermap.org/img/wn/${currentWeather?.weather?.[0]?.icon}.png`,
                  }}
                  resizeMode="contain"
                />
              </View>
            </>
          </View>
          <View
            style={StyleSheet.flatten([
              styles.weatherPropertyViewStyle,
              dynamicHomeScreenStyle.weatherPropertyViewStyle,
            ])}>
            <WeatherPropertyItem
              property={homeScreenString.wind}
              value={`${currentWeather?.wind?.speed}km/h`}
              iconUrl={Images.wind}
            />
            <WeatherPropertyItem
              property={homeScreenString.humidity}
              value={`${currentWeather?.main?.humidity}%`}
              iconUrl={Images.humidity}
            />
            <WeatherPropertyItem
              property={homeScreenString.pressure}
              value={`${currentWeather?.main?.pressure}`}
              iconUrl={Images.pressure}
            />
          </View>
          <ListView
            title={homeScreenString.todayWeather}
            data={futureWeather?.slice(0, 8)}
          />
          <ListView
            title={homeScreenString.tomorrowWeather}
            data={futureWeather?.slice(8, 16)}
          />
          <ListView
            title={homeScreenString.nextWeather}
            data={futureWeather?.slice(16, futureWeather?.length - 1)}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
