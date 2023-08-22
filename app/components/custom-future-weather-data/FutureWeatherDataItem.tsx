import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getTime} from '../../services';
import {CurrentWeather} from '../../types';
import {styles} from './FutureWeatherDataItemStyle';
import useFutureWeatherDataItem from './useFutureWeatherDataItem';

const FutureWeatherDataItem = ({
  item,
}: {
  item: CurrentWeather;
}): React.JSX.Element => {
  const {dynamicFutureWeatherDataItemStyle} = useFutureWeatherDataItem();

  return (
    <View
      style={StyleSheet.flatten([
        styles.rootViewStyle,
        dynamicFutureWeatherDataItemStyle.rootViewStyle,
      ])}>
      <Text
        style={StyleSheet.flatten([
          styles.timeTextStyle,
          dynamicFutureWeatherDataItemStyle.timeTextStyle,
        ])}>
        {getTime(item?.dt_txt?.slice(11, 13))}
      </Text>
      <View style={styles.imageViewStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `https://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}.png`,
          }}
        />
      </View>
      <View style={styles.degreeIconViewStyle}>
        <Text
          style={StyleSheet.flatten([
            styles.degreeTextStyle,
            dynamicFutureWeatherDataItemStyle.degreeTextStyle,
          ])}>
          {(item?.main?.temp - 273.15).toFixed()}
        </Text>
        <View
          style={StyleSheet.flatten([
            styles.degreeOuterViewStyle,
            dynamicFutureWeatherDataItemStyle.degreeOuterViewStyle,
          ])}>
          <View
            style={StyleSheet.flatten([
              styles.degreeInnerViewStyle,
              dynamicFutureWeatherDataItemStyle.degreeInnerViewStyle,
            ])}
          />
        </View>
      </View>
    </View>
  );
};

export default FutureWeatherDataItem;
