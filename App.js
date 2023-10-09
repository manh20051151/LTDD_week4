import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native'; 

import a_2 from './screen/2_a'
import b_2 from './screen/2_b'
import c_2 from './screen/2_c'
import tiki_Ok from './screen/Tiki_ok'
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
        <Button 
          title='c_2'
          onPress={()=>{
            navigation.navigate('c_2')
          }}
        />
        <Button 
        title='Tiki_Ok'
        onPress={() =>{
          navigation.navigate('tiki_Ok')
        }

        }
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
        <Stack.Screen name='c_2' component={c_2}></Stack.Screen>
        <Stack.Screen name='tiki_Ok' component={tiki_Ok}></Stack.Screen>
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
