import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchStackScreen from "./StackNavigators/SearchStackScreen";
import ListStackScreen from "./StackNavigators/ListStackScreen";
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator initialRouteName="Search" screenOptions={{headerShown: false}}>
        <Tab.Screen
            options={{
                tabBarLabel:"Search",
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name='search' 
                    color={color} size={size} />
                ),
            }}
            name="Search" 
            component={SearchStackScreen} 
        />

        <Tab.Screen
            options={{
                tabBarLabel:"List",
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name='list-ul'
                    color={color} size={size} />
                ),
            }}
            name="List"
            component={ListStackScreen} 
        />
      </Tab.Navigator>
    );
}

export default TabNavigator;