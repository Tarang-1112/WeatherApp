import {NavigationContainer} from '@react-navigation/native';
import React, {SetStateAction, createContext, useState} from 'react';
import {Provider} from 'react-redux';
import {Dispatch} from 'redux';
import {RootStack} from './navigation';
import {store} from './redux';

interface Theme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const THEMECONTEXT = createContext<Theme>({
  theme: 'dark',
  setTheme: () => {},
});

const App = (): React.JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <Provider store={store}>
      <NavigationContainer>
        <THEMECONTEXT.Provider value={{theme, setTheme}}>
          <RootStack />
        </THEMECONTEXT.Provider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
