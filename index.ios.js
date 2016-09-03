import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//import TabBar from './app/Components/TabBar';
//import StatusBar from './app/Components/StatusBar';

class SocialBBall extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:'flex-end', flexDirection: 'row'}}>
       <View style={{width: 75, height: 75, backgroundColor: 'powderblue'}} />
       <View style={{width: 75, height: 75, backgroundColor: 'skyblue'}} />
       <View style={{width: 75, height: 75, backgroundColor: 'steelblue'}} />
       <View style={{width: 75, height: 75, backgroundColor: 'skyblue'}} />
       <View style={{width: 75, height: 75, backgroundColor: 'powderblue'}} />
     </View>

    );
  }
}
/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
      flexDirection: 'row',
      backgroundColor:' '#F5FCFF'',
    },
      // Try setting `flexDirection` to `column`.
    /*  <View style={{flex: 1, alignItems: 'flex-end', flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );*/
  //});

AppRegistry.registerComponent('SocialBBall', () => SocialBBall);
