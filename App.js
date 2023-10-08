import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native'; 

import FirstScreen from './screen/FirstScreen'
import a_1 from './screen/1_a'
import b_1 from './screen/1_b'
import c_1 from './screen/1_c'
import d_1 from './screen/1_d'
import e_1 from './screen/1_e'
import a_2 from './screen/2_a'
import b_2 from './screen/2_b'
const  Stack = createStackNavigator();

const Home = ({navigation}) => {
  return(
    <View>
          <Button title='a_2' 
          onPress={()=>{
            navigation.navigate('a_2');
          }}
        />
          <Button title='b_2' 
          onPress={()=>{
            navigation.navigate('b_2');
          }}
        />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="a_2" component={a_2}></Stack.Screen>
        <Stack.Screen name="b_2" component={b_2}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
