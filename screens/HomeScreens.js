import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
      <View>
        <TouchableOpacity  onPress={() =>
        navigation.navigate('home')
      }>
        <Text> textInComponent </Text>
        </TouchableOpacity>
      
      </View>
    )
  }


export default HomeScreen
