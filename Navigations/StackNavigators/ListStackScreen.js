import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../../ListScreens/ListScreen';
import ListDetailsScreen from '../../ListScreens/ListDetailsScreen';
import React, {useState} from 'react';



const ListStack = createNativeStackNavigator();
  
  
function ListStackScreen() {
  return (
    <ListStack.Navigator initialRouteName="ListItems" >
      <ListStack.Screen name="ListItems" component={ListScreen} />
      <ListStack.Screen name="ListItemDetails" component={ListDetailsScreen} />
    </ListStack.Navigator>
    
  );
}

export default ListStackScreen;