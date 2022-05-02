import { Text, View, StyleSheet } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import React, {useState} from 'react';



function SearchScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [data, setData] = useState('');

    const display = (x) => setData("dataaa"+{x})
    
    return (
        <View >
            <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    onPressIn={display(searchQuery)}
                    
                />
            <View style={styles.circle}>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:3}} >
                        <Text style={styles.text}>
                            {data}
                        </Text>
                    </View>
                    <View style={{flex:1, alignItems:"center",justifyContent:"center", width:"80%", margin:"auto"}} >
                        <Button
                        color='black' mode="contained" onPress={() => console.log('Pressed')}>
                            click
                        </Button>
                    </View>
                </View>
                    
                

                <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8',}} />


                <Text style={styles.text}>gellooo</Text>
                <View
                    style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                    }}
                />
                <Text style={styles.text}>gellooo</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
       
    },
    text: {
        fontFamily: "CircularStd-Book",
        fontSize: 20,
        color: '#2f354b',
        marginBottom:5,
        justifyContent: "center"
    },
    Button: {
        fontFamily: "CircularStd-Book",
        fontSize: 25,
        color: '#2f354b',
        justifyContent: "center",
        
    }
});

export default SearchScreen;