import React from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/EvilIcons';
import Iconz from 'react-native-vector-icons/MaterialCommunityIcons';
import Icong from 'react-native-vector-icons/AntDesign';


export default function App() {

  return (
    <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 25}, {marginVertical: 50}]}>LOGIN</Text>
        <View style={styles.btn}>
            <TextInput
                placeholder="Email"
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
            style={[{backgroundColor: '#C34E3B'}, {width: 350, height: 45, justifyContent: 'center'}]}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={[styles.text, {fontSize: 18}, {color: 'white'}]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{marginTop: 10}}>When you agree to terms and conditions</Text>
        <Text style={{marginVertical: 10, color: 'blue'}}>For got your password?</Text>
        <Text>Or login with</Text>

        <View style= {{flex: 1,flexDirection: 'row', paddingTop: 40}}>
            <View style= {{flex: 1}}>
                <TouchableOpacity
                style={[styles.button,{backgroundColor: '#275A8D'}]}
                onPress={() => Alert.alert('Simple Button pressed')}
            >
                <Iconf
                name="sc-facebook"
                type="material"
                color="black"
                size={40}
                style={{paddingHorizontal: 12}}
            />
            </TouchableOpacity>
            </View>
            <View style= {{flex: 1}}>
                <TouchableOpacity
                style={[styles.button,{ backgroundColor: '#1593C5'}]}
                onPress={() => Alert.alert('Simple Button pressed')}
            >
                <Iconz
                name="alpha-z"
                type="material"
                color="black"
                size={50}
                style={{paddingHorizontal: 12}}
            />
            </TouchableOpacity>
            </View>
            <View style= {{flex: 1}}>
                <TouchableOpacity
                style={[styles.button,{backgroundColor: '#D8EFDE'}]}
                onPress={() => Alert.alert('Simple Button pressed')}
            >
                <Icong
                name="google"
                type="material"
                color="black"
                size={24}
                style={{paddingHorizontal: 12}}
            />
            </TouchableOpacity>
            </View>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(49, 170, 82, 0.19)'
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
    width: 100,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#AFCCB8',
    width: 350,
    height: 45,     
  },
});
