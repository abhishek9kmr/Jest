import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <View>
      <ScrollView>
      <Text>App</Text>
      <Child />
      </ScrollView>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({})