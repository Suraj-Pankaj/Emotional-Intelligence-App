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
  ScrollView
} from 'react-native';
// import Header from '../Header/Header.js';
// import HomeScreen from '../HomeScreen/HomeScreen.js';
import FormButton from '../FormButton/FormButton.js';
import FormInput from '../FormInput/FormInput.js';
import { windowHeight, windowWidth } from '../../../AwesomeProject/utils/Dimension';


const LoginScreen = ({navigation})=> {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      {/* <Header/> */}

      <ImageBackground
        source={require('../../../AwesomeProject/assets/blackwall6.jpg')}
        style={styles.image}
      />
      <Image
        source={require('../../../AwesomeProject/assets/eilogo10.png')}
        style={styles.logo}></Image>

      <Text style={styles.text}>Mindful Power</Text>
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

<FormButton
        buttonTitle="Login"
        onPress={() => login(email, password)}
      />

<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

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

  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 20,
    marginBottom: 5,
    padding: 5,
    color: 'white',
    // fontWeight: 'bold',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
});
