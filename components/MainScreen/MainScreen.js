import { View, Text , StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { Calendar, CalendarList, Agenda  } from 'react-native-calendars'
import React from 'react'
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

 const MainScreen = ({navigation}) => {
  return (
    <View style={styles.appcontainer}>

<ImageBackground source={require('../../../AwesomeProject/assets/blackwall6.jpg')}
        style={styles.image}
        />

        
        <Text style={styles.HeadText}>Tracking daily habits and Emotions is the key to developing Emotional Intelligence!!</Text>
        <Text style={styles.HeadText}>Start your Journey-</Text>
       
<Calendar style={styles.calendar}


// onDayPress={}
onDayPress={() => navigation.navigate('EITechniques')}
markedDates={{
        '2022-10-01': {selected: true, marked: true},
      }}
  
/>
</View>

    
  )
}
export default MainScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    HeadText: {
        fontSize: 20,
        margin: 10,
        padding: 15,
        fontFamily:'PlayfairDisplay-SemiBoldItalic',
        color: 'white'

    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.95
      },
    calendar: {
        margin:15,
        padding: 5
        
    }

});
  