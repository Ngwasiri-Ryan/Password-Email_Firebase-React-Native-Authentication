import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { firestore } from '../Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const AccessScreen = () => {
  const [name, setName] = useState('');
  const [matricule, setMatricule] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const usersCollection = collection(firestore, 'usersdb');
      const q = query(usersCollection, where('name', '==', name), where('matricule', '==', matricule));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        navigation.navigate('WelcomeScreen', {name});
        console.log("Login Successful")
      } else {
        Alert.alert('Error', 'Invalid name or matricule.');
      }
    } catch (error) {
      console.error('Error checking user credentials:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Matricule"
        value={matricule}
        onChangeText={text => setMatricule(text)}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AccessScreen;
