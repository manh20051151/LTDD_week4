import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';


export default function App() {
  return (
    <LinearGradient
    colors={["#FFFFFF", "#FFFFFF", "#00CCF9"]}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <View style={styles.center}>
        <Text>
        <Icon name="locked" size={100} color="black" />
        </Text>
        <Text style={[styles.text, {fontSize: 25}, {marginTop: 40}]}>FORGET </Text>
        <Text style={[styles.text, {fontSize: 25}, {marginBottom: 40}]}>PASSWORD</Text>
        <Text style={[styles.text, {fontSize: 15}, {marginBottom: 40}]}>Provide your account's email for which you{'\n'} want to reset your password</Text>
        <View style={styles.btn}>
            <Icon
                name="email"
                type="material"
                color="black"
                size={24}
                style={{paddingHorizontal: 12}}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                flex: 1,
                paddingVertical: 10,
                }}
            />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={[styles.text, {fontSize: 18}]}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.how}>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 16,
    borderRadius: 100,
    width: 150,
    height: 150,
    textAlign: 'center',
    lineHeight: 130,
    fontSize: 20
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomLeft: {
    flex: 1,
    alignItems: 'center',
 
  },
  bottomRight: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    width: 305,
    height: 45, 
    backgroundColor: "#E3C000",
    alignItems: "center",
    justifyContent: "center"
  },
  how: {
    flex: 2,
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'gray',
    width: 305,
    height: 45,  
    
  }
});
