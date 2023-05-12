import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {windowWidth} from '../../utils/Dimension';
import {color} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutEI() {
  return (
    <ScrollView>
    <View style={styles.appcontainer}>
      {/* <Header/> */}

      <ImageBackground
        source={require('../../assets/eilogo8.jpg')}
        style={styles.image}
      />

      <Image
        source={require('../../assets/EIdef.png')}
        style={styles.defimage}></Image>
      <Text style={styles.deftexthead}>What is Emotional Intelligence?</Text>

      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 10}}>
          <FlatList
            data={[
              {key: 'Recognize, understand and manage our own emotions and;'},
              {
                key: 'Recognize, understand and influence the emotions of others.',
              },
            ]}
            renderItem={({item}) => {
              return (
                <View style={{margin: 10}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: 'bold'
                    }}>{`\u2022 ${item.key}`}</Text>
                </View>
              );
            }}
          />
        </View>
      <Text style={styles.textdef} >
        In practical terms, this means being aware that emotions can drive our
        behavior and impact people (positively and negatively), and learning how
        to manage those emotions - both our own and others.
      </Text>
      <Text style={styles.textdef} >
      Managing emotions is especially important in situations when we are under pressure. For example, when we are:


      </Text>
      <View style={{padding: 10}}>
          <FlatList
            data={[
              {key: 'Giving and receiving feedback'},
              {key: 'Meeting tight deadlines'},
              {key: 'Dealing with challenging relationships'},
              {key: 'Not having enough resources'},
              {key: 'Navigating change'},
              {key: 'Working through setbacks and failure'},
            ]}
            renderItem={({item}) => {
              return (
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: 'bold'
                    }}>{`\u2022 ${item.key}`}</Text>
                </View>
              );
            }}
          />
        </View>

      
      
      </SafeAreaView>

      <Text style={styles.deftexthead}>Four key skills to increasing your EQ:</Text>

      <View style={{padding: 10}}>
          <FlatList
            data={[
              {key: 'Self-management'},
              {key: 'Self-awareness'},
              {key: 'Social awareness'},
              {key: 'Relationship management'},
            ]}
            renderItem={({item}) => {
              return (
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: 'bold'
                    }}>{`\u2022 ${item.key}`}</Text>
                </View>
              );
            }}
          />
        </View>


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appcontainer: {
    width: '100%',
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.4,
  },

  defimage: {
    width: 450,
    height: 200,
    resizeMode: 'contain',
    padding: 30,
    // flex: 1,
  },
  deftexthead: {
    padding: 10,
    margin: 10,
    fontSize: 18,
      //  fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
    // backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 5,
    fontFamily: 'Piazzolla-ExtraBold',
   

  },
  textdef: {
    color: 'black',
    fontSize: 15,
    padding: 12,
    fontWeight: 'bold'
    // fontFamily: 'Piazzolla-Bold',

  }
});
