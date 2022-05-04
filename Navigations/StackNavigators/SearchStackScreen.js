import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../../SearchScreens/SearchScreen';
import SearchDetailsScreen from '../../SearchScreens/SearchDetailsScreen';
import React from 'react';



const SearchStack = createNativeStackNavigator();
function SearchStackScreen() {
    return (
        <SearchStack.Navigator initialRouteName="SearchItems"  >
            <SearchStack.Screen name="Universities" component={SearchScreen} />
            <SearchStack.Screen name="SearchItemDetails" component={SearchDetailsScreen}
                options= {({route}) => ({title: route.params.title, headerTitleAlign:"center"})} 
            />
        </SearchStack.Navigator>  
    );
}

export default SearchStackScreen;