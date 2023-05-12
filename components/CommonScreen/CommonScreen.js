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
import PlanButton from '../StyleButton/PlanButton.js';




const CommonScreen = ({navigation}) => {
    return (
        <View style={styles.appcontainer}>

            
<ImageBackground source={require('../../../AwesomeProject/assets/blackwall6.jpg')}
        style={styles.image}
        />
          
            
        <Slider></Slider>
        <View style={styles.Tech}>
            {/* <Text style={styles.title}>To Improve your Mood: Exercise</Text> */}
            <TechStyleButton title='To Improve your Mood: Exercise'></TechStyleButton>
            <StyleButtonForm title='To Think more clearly: Meditate' />
            <StyleButtonForm title='To Understand the World: Read' />
            <PlanButton title='To Understand Yourself: Write'></PlanButton>
          

            
            {/* <Text style={styles.title}>To Understand Yourself: Write</Text> */}



        </View>
          

        
       
        
        <StatusBar style="auto" />
        </View>
    );
  };
export default CommonScreen;

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
      Tech: {
        color: 'white',
        marginTop:'50%',
        width:'100%',
        alignItems:'center',
      },
      title:{
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Piazzolla-Bold',
        // backgroundColor: 'rgba(0,0,0,.5)',
        padding: 20
        
  
      },

});