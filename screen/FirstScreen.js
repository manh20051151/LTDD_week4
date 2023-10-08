import React from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#00CCF9', '#00CCF9']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.center}>
        <Text style={styles.circle}></Text>
        <Text style={[styles.text, {fontSize: 25}, {marginTop: 60}]}>GROW</Text>
        <Text style={[styles.text, {fontSize: 25}, {marginBottom: 60}]}>YOUR BUSINESS</Text>
        <Text style={[styles.text, {fontSize: 15}]}>We will help you to grow your business using{'\n'} online server</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={[styles.text, {fontSize: 20}]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRight}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Simple Button pressed')}
            >
                <Text style={[styles.text, {fontSize: 20}]}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 4,
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
    alignItems: 'center'
  },
  bottomRight: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    width: 119,
    height: 48,
    backgroundColor: "#E3C000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
});
