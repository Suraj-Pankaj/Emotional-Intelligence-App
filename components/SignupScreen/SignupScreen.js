import React from 'react';
import {useContext, useState} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Button
  
} from 'react-native';
// import Header from '../Header/Header.js';
// import HomeScreen from '../HomeScreen/HomeScreen.js';
import FormButton from '../FormButton/FormButton.js';
import FormInput from '../FormInput/FormInput.js';
import { windowHeight, windowWidth } from '../../../AwesomeProject/utils/Dimension';
// import {AuthContext} from '../../Navigation/AuthProvider';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';



const SignupScreen = ({navigation})=> {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


//   const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* <Header/> */}

      <ImageBackground
        source={require('../../../AwesomeProject/assets/blackwall6.jpg')}
        style={styles.image}
      />
      

      <Text style={styles.text}>Create an Account</Text>
      <FormInput
        labelValue= {email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        // iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}></FormInput>

<FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />


<FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

<FormButton
        buttonTitle="Signup"
        onPress={() => navigation.navigate('Main')}
      />

<View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: 'white'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: 'white'}]}>
          Privacy Policy
        </Text>

     
      </View>

      
    </View>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.95,
  },

  text: {
    fontFamily: 'Piazzolla-Bold',
    fontSize: 30,
    marginBottom: 15,
    padding: 5,
    color: 'white',
    // fontWeight: 'bold',
  },
  navButton: {
    marginTop: 15,
  },

  navButtonText: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    // fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'white',
  },

});
