import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
// import HomeScreen from '../HomeScreen/HomeScreen.js';



const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.menu} source={require('../../assets/menu.png')}/> 
      <Image style={styles.logo} source={require('../../assets/logo.png')}/> 

    </View>
  )
}
export default Header;

