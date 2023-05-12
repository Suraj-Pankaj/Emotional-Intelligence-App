import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// import Header from '../AwesomeProject/components/Header/Header.js';
import Slider from '../AwesomeProject/components/Slider/Slider.js';
import StyleButton from '../AwesomeProject/components/StyleButton/Button.js';
import HomeScreen from '../AwesomeProject/components/HomeScreen/HomeScreen.js';
import LoginScreen from '../AwesomeProject/components/LoginScreen/LoginScreen.js';
import {withNavigation} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignupScreen from './components/SignupScreen/SignupScreen.js';
import AboutEI from './components/AboutScreen/AboutEI.js';
// import Schedule from './components/MainScreen/MainScreen.js';
import MainScreen from './components/MainScreen/MainScreen.js';
import DayPlanScreen from './components/DayPlanScreen/DayPlanScreen.js';
import CommonScreen from './components/CommonScreen/CommonScreen.js';
import Exercise from './components/Exercise/Exercise.js';


export default function App() {
  // const Stack = createNativeStackNavigator();

  const Drawer = createDrawerNavigator();

  return (
    // <HomeScreen></HomeScreen>
    <NavigationContainer >
      <Drawer.Navigator backBehavior="history" screenOptions={{
        
        headerStyle: {
    // backgroundColor: 'rgba(0,0,0,.5)',
    // backgroundColor:'black'
    backgroundColor:'#01344C'
  },
        headerTintColor: 'white',
    
        headerTitleStyle: {

                }
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
        }}/>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
        <Drawer.Screen name="AboutEI" component={AboutEI} />
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="DayPlans" component={DayPlanScreen} />
        <Drawer.Screen name="EITechniques" component={CommonScreen} />
        <Drawer.Screen name="Exercise" component={Exercise} />




        




      </Drawer.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>

    // </View>
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
