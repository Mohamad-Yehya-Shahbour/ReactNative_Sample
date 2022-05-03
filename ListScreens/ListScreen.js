import { Button, Text, View , StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';




function ListScreen({ navigation }) {

    const [data, setData] = useState();
    const array = [];
    const categArray = [];
    
    

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
            
        fetch("https://api.publicapis.org/entries", requestOptions)
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson);
            for(let i=0; i<responseJson.entries.length; i++){
                
                if(array.includes(responseJson.entries[i].Category) == true){
                    continue;
                }else{
                    array.push(responseJson.entries[i].Category);
                    let tempObj = {};
                    tempObj.value = responseJson.entries[i].Category;
                    categArray.push(tempObj)
                }
                
            }
            console.warn('array', categArray.length);
        })
        .catch(error => console.warn('errorrrr', error));

        
    },[]);
    
    

    return (
        <View style={styles.circle}>
            <Text style={styles.text}>gellooo</Text>
            <View style={{ height: 1, width: '100%', backgroundColor: '#C8C8C8',}} />
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        padding: 8,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        height: 35,
        marginBottom: 10,
        alignItems: 'center'
    },
    text: {
        fontFamily: "CircularStd-Book",
        fontSize: 14,
        color: '#2f354b',
        textAlign: 'center'
    }
});

export default ListScreen;