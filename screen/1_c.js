import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';


export default function App() {
    const [code, setCode] = useState('');

    const handleChangeText = (text) => {
      // Giới hạn độ dài của mã là 6 ký tự
      const cleanedCode = text.slice(0, 6);
      setCode(cleanedCode);
    };
  return (
    <LinearGradient
    colors={["#FFFFFF", "#FFFFFF", "#00CCF9"]}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <View style={styles.center}>
        <Text style= {[styles.text, {fontSize: 40}]}>
            CODE
        </Text>
        <Text style={[styles.text, {fontSize: 25}, {marginTop: 40}, {marginBottom: 40}]}>VERIFICATION </Text>
        <Text style={[styles.text, {fontSize: 15}, {marginBottom: 40}]}>Enter ontime password sent on{'\n'} ++849092605798</Text>
        <View style={styles.codeInputContainer}>
        {Array.from({ length: 6 }, (_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            value={code[index] || ''}
            onChangeText={(text) => {
              const newCode = [...code];
              newCode[index] = text;
              handleChangeText(newCode.join(''));
            }}
            maxLength={1}
            keyboardType="default"
          />
        ))}
      </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={[styles.text, {fontSize: 18}]}>VERIFY CODE</Text>
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
    flex: 7,
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
    
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
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
});
