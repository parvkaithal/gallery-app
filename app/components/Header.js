import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    ImageBackground,
    Image,
 } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('../img/background.jpeg')}
        >
        <View style={styles.headercontainer}>
          <View style={styles.profilepic}>
            <Image 
              style={styles.mypic}
              source={require('../img/two.jpeg')}
            />
          </View>
          <Text style={styles.name}>Parvesh Kumar</Text>
          <Text style={styles.liner}>A Part Time Photographer</Text>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  headercontainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.6)'
  },
  profilepic: {
      width: 180,
      height: 180,
  },
  mypic: {
     flex: 1,
     width: null,
     alignSelf: 'stretch',
     borderRadius: 90,
     borderWidth: 3,
     borderColor: '#fff', 
  },
  name: {
      marginTop: 18,
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
  },
  liner: {
      fontSize: 15,
      color: '#fff',
      fontStyle: 'italic',
      marginTop: 5,
  },
});
