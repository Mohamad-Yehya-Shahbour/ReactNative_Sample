import { Button, Text, View , StyleSheet} from 'react-native';
import React from 'react';


function ListScreen({ navigation }) {
    return (
        <View style={styles.circle}>
        <Text style={styles.text}>gellooo</Text>
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