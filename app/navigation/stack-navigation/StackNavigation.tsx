import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Routes} from '../../constants';
import {HomeScreen} from '../../modules';
import useStackNavigation from './useStackNavigation';

//This is Stack Navigator of application which includes all the screen that used in application.

const Stack = createStackNavigator();

const RootStack: FC = () => {
  useStackNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
