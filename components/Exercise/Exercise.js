import React from 'react';
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
// import Header from '../../../AwesomeProject/components/Header/Header.js';
import Slider from '../../../AwesomeProject/components/Slider/Slider.js';
import StyleButton from '../../../AwesomeProject/components/StyleButton/Button.js';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import StyleButtonForm from '../StyleButton/StyleButtonForm.js';
import TechStyleButton from '../StyleButton/TechButton.js';
// import styles from '../StyleButton/styles.js';

export default function Exercise() {
  return (
    <View style={styles.appcontainer}>

            
    <ImageBackground source={require('../../../AwesomeProject/assets/exercise3.jpg')}
            style={styles.image}
            />

{/* <Image
        source={require('../../assets/exercise4.jpg')}
        style={styles.defimage}></Image> */}

<Text style={styles.HeadText}>Start your Fitness Journey-</Text>

<View style={styles.exercisecont}>

 <ImageBackground
        source={require('../../assets/chest.png')}

        style={styles.defimage}>
          {/* <Text style={styles.HeadText}>Chest Wokout</Text> */}
        </ImageBackground>
        
</View>


            </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appcontainer:{
      width:'100%',
      height:'100%'
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      opacity: 0.95
    },
    defimage: {
      // width: '100%',
      height: 100,
      // resizeMode: 'contain',
      // padding: 30,
      margin: 5
     
     
      // flex: 1,
    },
    HeadText: {
      fontSize: 20,
      margin: 10,
      padding: 15,
      fontFamily:'PlayfairDisplay-SemiBoldItalic',
      color: 'white'

  },

  });