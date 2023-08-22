import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {styles} from './WeatherPropertyItemStyle';
import useWeatherPropertyItem from './useWeatherPropertyItem';

const WeatherPropertyItem = ({
  iconUrl,
  value,
  property,
}: {
  iconUrl: ImageSourcePropType;
  value: string;
  property: string;
}) => {
  const {dynamicWeatherPropertyStyle} = useWeatherPropertyItem();

  return (
    <View style={styles.rootViewStyle}>
      <View style={styles.iconImageViewStyle}>
        <Image source={iconUrl} style={styles.iconImageStyle} />
      </View>
      <Text
        style={StyleSheet.flatten([
          styles.valueTextStyle,
          dynamicWeatherPropertyStyle.valueTextStyle,
        ])}>
        {value}
      </Text>
      <Text
        style={StyleSheet.flatten([
          styles.propertyTextStyle,
          dynamicWeatherPropertyStyle.propertyTextStyle,
        ])}>
        {property}
      </Text>
    </View>
  );
};

export default WeatherPropertyItem;
