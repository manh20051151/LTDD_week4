import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Fontisto';

export default function App() {

  return (
    <View style= {styles.container}>
        <Text style= {{alignItems: 'flex-start', fontSize: 32, fontWeight: "bold", marginVertical: 80}}>LOGIN</Text>
        <View style= {styles.cneter}> 
        <View style={styles.btn}>
            <Icon2
                name="user"
                type="material"
                color="black"
                size={24}
                style={{paddingHorizontal: 12}}
            />
            <TextInput
                placeholder="Name"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
                }}
            />

        </View>
        <View style={[styles.btn, {marginTop:20}]}>
            <Icon3
                name="locked"
                type="material"
                color="black"
                size={24}
                style={{paddingHorizontal: 12}}
            />
            <TextInput
                placeholder="Password"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
                }}
            />
                <Icon
                name="eye"
                type="material"
                color="black"
                size={24}
                style={{paddingHorizontal: 12}}
            />
        </View>
        <View style={[styles.bottomLeft, {marginTop: 60}]}>
        <TouchableOpacity
            style={[{backgroundColor: 'black'}, {width: 350, height: 45, justifyContent: 'center'}]}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={[styles.text, {fontSize: 18}, {color: 'white'}]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.text, {marginTop: 40, fontSize: 20}]}>Forgot your password?</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBCB00',
  },
  cneter: {
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
 
  },
  bottomRight: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    width: 350,
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
    width: 350,
    height: 45,  
    borderWidth: 1,
    borderColor: 'white'
  },
  codeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeInput: {
    borderWidth: 1,
    borderBottomColor: 'gray',
    fontSize: 20,
    width: 40,
    height: 40,
    textAlign: 'center'
  },
  inp: {
    borderWidth: 1,
    borderColor: 'white'
  },
});
