import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
// import { ImageBackground } from "react-native-web";

const Home = ({ navigation }) => {

    return(
        <View style={styles.container}>
            {/* <View> */}
              <Image
                style={styles.bg}
                source={require('../assets/bgg.png')}
              />
            {/* </View> */}
            <View style={styles.top}>
              <Feather name="menu" size={24} color="blue" />
              <TouchableOpacity onPress={() => navigation.navigate('myprofile')}>
                <FontAwesome5 name="user" size={24} color="blue" />
              </TouchableOpacity>
            </View>
            <View style={styles.headerAtas}>
            <TouchableOpacity onPress={() => navigation.navigate('Song')}>
                  <Image
                    style={{width: 150, height:175.91, borderRadius:10}}
                    source={require('../assets/logo.png')}
                  />
              </TouchableOpacity>
            <Text style={styles.header}>Godere Audio</Text>
            </View>
  
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#ffff',
    // overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between',
    marginTop: 30
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
},
header: {
    color: '#0047FF',
    fontSize: 35,
    fontWeight : "bold",
    top: 40,
    marginLeft:-30
},
headerAtas:{
  marginLeft:40,
  marginTop:180
},
//     search: {
//     color : '#ffff',
//     width: '100%',
//     height: 40,
//     margin : 30,
//     backgroundColor: "#FF5914",
//     fontSize: 20,
//     borderRadius: 3,
//     alignSelf: "center",
//     textAlign: "center",
//     fontweight : "Bold"
// },
    header2: {
    margin: 5,
    fontWeight : "bold",

},

  bg: {
    position: "absolute",
    width: 405,
    height: 900,
    left: -3,
    top: -10
  }
});

export default Home;