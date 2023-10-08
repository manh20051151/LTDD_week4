import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput, CheckBox   } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconf from 'react-native-vector-icons/EvilIcons';
import Iconz from 'react-native-vector-icons/MaterialCommunityIcons';
import Icong from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';

export default function App() {
    const [gender, setGender] = useState('male');
  return (
    <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 25}, {marginVertical: 30}]}>REGISTER</Text>
        <View style={styles.btn}>
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
        <View style={[styles.btn, {marginVertical: 20}]}>
            <TextInput
                placeholder="Phone"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
                }}
            />
        </View>
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
        <View style={[styles.btn, {marginVertical: 20}]}>
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
        <View style={styles.btn}>
            <TextInput
                placeholder="Birthday"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 10,
                }}
            />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                value="male"
                status={gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setGender('male')}
                />
                <Text>Male</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}>
                <RadioButton
                value="female"
                status={gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setGender('female')}
                />
                <Text>Female</Text>
            </View>
    </View>


        <View style={[styles.bottomLeft]}>
        <TouchableOpacity
            style={[{backgroundColor: '#C34E3B'}, {width: 350, height: 45, justifyContent: 'center'}]}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={[styles.text, {fontSize: 18}, {color: 'white'}]}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{marginTop: 10}}>When you agree to terms and conditions</Text>

        


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
