import { Text, View, StyleSheet, ScrollView, Pressable , FlatList, SafeAreaView } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import React, {useState, useEffect } from 'react';



function SearchScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    //const [filteredData, setFilteredData] = useState([]);

    const onChangeSearch = query => {
        setSearchQuery(query);}

    const api = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://universities.hipolabs.com/search?country=${searchQuery}`, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
              })
            .catch(error => console.warn('error', error));
    }

    const ItemView = ( {item} ) => {
        return (
          // Flat List Item
        <View style={{flex:1, alignItems:"center",justifyContent:"center"}} >
            <Pressable style={styles.button} onPress={() => navigation.navigate('SearchItemDetails', {
                url: item.domains[0],
            })}>
                <Text style={styles.text}>{item.name}</Text>
            </Pressable>
        </View>
        );
      };

      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8',}} />
        );
      };

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://universities.hipolabs.com/search", requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
              })
            .catch(error => console.warn('error', error));
      },[]);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={api}
            />
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}

                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    circle: {
      
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width:"80%",
        marginVertical:7
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

export default SearchScreen;