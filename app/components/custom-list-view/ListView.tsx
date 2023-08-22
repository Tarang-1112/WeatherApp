import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {THEMECONTEXT} from '../../App';
import {Colors} from '../../themes';
import {CurrentWeather} from '../../types';
import {FutureWeatherDataItem} from '../custom-future-weather-data';
import {styles} from './ListViewStyle';

const ListView = ({title, data}: {title: string; data: CurrentWeather[]}) => {
  const {theme} = useContext(THEMECONTEXT);

  const dynamicListViewStyle = {
    titleTextStyle: {
      color: theme === 'dark' ? Colors.white : Colors.black,
    },
  };

  return (
    <>
      <Text
        style={StyleSheet.flatten([
          styles.titleTextStyle,
          dynamicListViewStyle.titleTextStyle,
        ])}>
        {title}
      </Text>
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={({item}) => <FutureWeatherDataItem item={item} />}
        />
      </View>
    </>
  );
};

export default ListView;
