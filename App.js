/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';

import Torch from 'react-native-torch';
var bool = false;
export default class ButtonBasics extends Component {


state = {
  torchStatus: false
}
torchSwitch = () => {
  Torch.switchState(!this.state.torchStatus);
  console.log(this.state.torchStatus);
  this.setState({ torchStatus: !this.state.torchStatus});
}


  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={this.state.torchStatus ? require('./assets/torchon.png') : require('./assets/torchoff.png')} style={{width: '100%', height: '100%' }} >
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.torchSwitch}
            title="Press Me"
            style={{width: '100%', height: '100%', fontSize: 1, color: 'transparent',backgroundColor: 'transparent'}}

          />
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    color: 'transparent'

  },
  Button: {
    color: 'transparent',


  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
