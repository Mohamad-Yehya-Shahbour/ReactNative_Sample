import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../SearchScreens/SearchScreen';
import SearchDetailsScreen from '../../SearchScreens/SearchDetailsScreen';
import React, {useState} from 'react';



const SearchStack = createNativeStackNavigator();
function SearchStackScreen() {
    return (
        <SearchStack.Navigator initialRouteName="SearchItems"  >
            <SearchStack.Screen name="SearchItems" component={SearchScreen} />
            <SearchStack.Screen name="SearchItemDetails" component={SearchDetailsScreen} />
        </SearchStack.Navigator>
        
    );
}

export default SearchStackScreen;