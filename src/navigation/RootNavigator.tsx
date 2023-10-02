import { View, Text } from 'react-native'
import React from 'react'
import AuthNavigator from './AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
  )
}

export default RootNavigator;