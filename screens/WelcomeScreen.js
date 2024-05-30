import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = ({ route }) => {
  const { name } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Welcome, {name}!</Text>
      <Text style={styles.subtitle}>We're glad to have you here.</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
        color="#000"
      />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    color: '#1E90FF',
    padding: 10,
    borderRadius: 5,
  },
})
