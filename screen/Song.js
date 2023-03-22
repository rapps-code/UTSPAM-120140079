import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import myprofile from "./myprofile";

const Song = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Image
            style={styles.bg}
            source={require('../assets/bgg.png')}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(myprofile)}
          >
            <FontAwesome5 name="user" size={24} color="blue" />
          </TouchableOpacity>
          
        </View>

        <View style={styles.logo}>
        <Image
            style={{ width: 100, height: 117.27, borderRadius: 10, marginLeft: 130, marginTop: 50 }}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.heading}>Godere Audio</Text>
        </View>

        <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('play1')}>
                  <Image
                    style={{width: 170, height:270, borderRadius:10}}
                    source={require('../assets/starboy.png')}
                  />
                  </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('play2')}> 
                  <Image
                    style={{width: 170, height:270, borderRadius:10}}
                    source={require('../assets/KillBill.png')}
                  />
                  </TouchableOpacity >
        </View>
      </View>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    width: '100%',
    backgroundColor: '#ffff',
    padding: 20,

  },
  heading: {
    color: '#0047FF',
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 55,
    marginTop: 10,

  },
  card:{
    top:40,
    flexDirection:"row",
    justifyContent: "space-between"

  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top: 20,
  },
  top: {
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bg: {
    position: "absolute",
    width: 400,
    height: 900,
    left: -18,
    top: -62
  }
});

export default Song; ''