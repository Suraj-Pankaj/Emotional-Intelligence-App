import React from "react";
import { ImageBackground, StyleSheet, Text, View,Button } from "react-native";
import Slider from '@react-native-community/slider'
// import styles from "./styles";


 export default function App() {
 
    const [rating, setRating] = React.useState(3);
  
    const getRatingEmoji = () => {
      if (rating === 1){ return '😡' }
  
      if (rating === 2) { return '😫' } 
  
      if (rating === 3) { return '😶' } 
  
      if (rating === 4)  { return '🙂' } 
  
      if (rating === 5) { return '😁' } 
    }
  
    return (
      <View style={styles.container}>


  
  <Text style={styles.emojitext}> How's your Mood today?</Text>
        <Slider
          style={styles.slider}
          // style={{width: 200, height: 40}}
          minimumValue={1}
          maximumValue={5}
          step={1}
          onValueChange={setRating}
        />  
        <Text style={styles.emojisty}>
          {getRatingEmoji()}
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 50,
      zIndex: 100,
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: 65,
      // resizeMode: 'cover'
    },
    
   emojitext: {
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      // fontWeight: 'bold',
      fontFamily: 'Piazzolla-Bold',
      margin: 10
      
     },

   slider: {
    width: 200, 
    height: 30,
    color:'white',
    
    
    
    
   },

   emojisty:{

    fontSize: 40,
    color: 'white',
    paddingLeft: 70,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'

   }




  
  
    });

 
  