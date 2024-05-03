import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
    alignItems:'center'
  }
})