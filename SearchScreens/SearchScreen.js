import { Text, View, StyleSheet,Pressable , FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { Searchbar} from 'react-native-paper';
import React, {useState, useEffect } from 'react';



function SearchScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false)
    
    const onChangeSearch = query => {
      setSearchQuery(query);
      if(query == ""){
        setData(null);
      }
    }

    const api = () =>{
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      setLoading(true);
      fetch(`http://universities.hipolabs.com/search?country=${searchQuery}`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson);
            setLoading(false);
          })
        .catch(error => {
          console.warn('error', error);
          setError(true);
        });
    }

    const ItemView = ( {item} ) => {
        return (
          // Flat List Item
        <View style={{flex:1, alignItems:"center",justifyContent:"center"}} >
            <Pressable style={styles.button} onPress={() => navigation.navigate('SearchItemDetails', {
                url: item.domains[0], title: item.name
            })}>
                <Text style={styles.text}>{item.name}</Text>
            </Pressable>
        </View>
        );
      };

      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View style={{ height: 1, width: '80%', backgroundColor: '#C8C8C8', justifyContent:"center", alignSelf:"center"}} />
        );
      };
    
    return (

      <SafeAreaView style={{ flex: 1}}>
          <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              onIconPress={api}
              style={{marginBottom:5, marginTop:1}}
          />
          {data? 
          (<FlatList
              data={data}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          ) : 
            <View>
              <Text style={styles.info}>Write the Country where you want to search universities. </Text>
              <Text style={styles.info}>example: "Lebanon", "Egypt", "France"</Text>
            </View> 
          }
          
          

          {loading && 
            <ActivityIndicator
            style={{position: 'absolute',left: 0,right: 0,bottom: 0,top: 0,}}
            size="large"
            color={"black"}
          />}

          { error && <Text style={{justifyContent:"center", alignSelf:"center", fontSize:"25",color:"black"}}>Page is not reachable, Please try again</Text>}
          
          

      </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: '#1e36e8',
        width:"90%",
        marginVertical:15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      info: {
        fontSize: 12,
        color: 'black',
        justifyContent:"center",
        alignSelf:"center"
      },
});

export default SearchScreen;