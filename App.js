/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigations/TabNavigator';


const App = () => {
  return (
    <NavigationContainer >
      <TabNavigator/>   
    </NavigationContainer>
  );
};


export default App;


