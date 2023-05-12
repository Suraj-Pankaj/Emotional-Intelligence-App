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




const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.appcontainer}>
                {/* <Header/> */}


        <ImageBackground source={require('../../../AwesomeProject/assets/blackwall6.jpg')}
        style={styles.image}
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>Mindful Power</Text>
          <Text style={styles.subtitle}>Improve your EI</Text>
          <Image
        source={require('../../../AwesomeProject/assets/eilogo10.png')}
        style={styles.logo}></Image>
          {/* <Slider></Slider> */}
        
        
        </View>
        
        
        <View style={styles.buttonsContainer}>
        
        <StyleButtonForm title='Take your EI Assesment' />
        <StyleButton title='New User?' ></StyleButton>
        {/* <StyleButton title='New User?'></StyleButton> */}
        </View>
        
        
        <StatusBar style="auto" />
        </View>
    );
  };
  
  export default HomeScreen;


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
  
    titles:{
      marginTop:'20%',
      width:'100%',
      alignItems:'center',
      //  backgroundColor: 'rgba(0,0,0,.5)',

      
  
    },
  
    title:{
      fontSize: 30,
      // fontWeight: 'bold',
      color: 'white',
      fontFamily: 'Piazzolla-Bold',
      // backgroundColor: 'rgba(0,0,0,.5)',

    },
  
    subtitle:{
      fontSize: 20,
      // fontWeight: 'bold',
      fontFamily: 'Piazzolla-Medium',
      color: 'white'
    },
  
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      opacity: 0.95
    },
  
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
      marginTop: 90
    },
  
  
  });
  
