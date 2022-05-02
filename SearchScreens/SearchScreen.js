import { Text, View, StyleSheet, ScrollView, Pressable  } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import React, {useState} from 'react';



function SearchScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => {
        setSearchQuery(query);}

    const api = () =>{
        console.warn(searchQuery)
    }
    
    return (
        <ScrollView >
            <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onIconPress={api}
                />
    
            <View style={{flex:1, alignItems:"center",justifyContent:"center"}} >
                <Pressable style={styles.button} onPress={() => navigation.navigate('SearchItemDetails')}>
                    <Text style={styles.text}>llll ll </Text>
                </Pressable>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8',}} />
                
            <View style={{flex:1, alignItems:"center",justifyContent:"center"}} >
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Business & Computer University College</Text>
                </Pressable>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8',}} />

            <View style={{flex:1, alignItems:"center",justifyContent:"center"}} >
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Business & Computer University College</Text>
                </Pressable>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8',}} />

        </ScrollView>
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