import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../../ListScreens/ListScreen';
import ListDetailsScreen from '../../ListScreens/ListDetailsScreen';
import React, {useState} from 'react';



const ListStack = createNativeStackNavigator();
  
  
function ListStackScreen() {
  return (
    <ListStack.Navigator initialRouteName="Links" >
      <ListStack.Screen name="Links" component={ListScreen} />
      <ListStack.Screen name="details" component={ListDetailsScreen} />
    </ListStack.Navigator>
    
  );
}

export default ListStackScreen;