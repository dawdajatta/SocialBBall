'use strict'
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class StatusBar extends Component {

  render() {
    return (
      <View style={[styles.StatusBar, this.props.style || {}]}>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  StatusBar: {
    alignItems: 'flex-start',
    height: 20,
    width: 375,
    backgroundColor: "skyblue"
  }

});



module.exports = StatusBar
