import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { firestore } from '../Firebase'; 
import { collection, addDoc } from "firebase/firestore";

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [matricule, setMatricule] = useState('');

  const handleAddUser = async () => {
    try {
      const userRef = await addDoc(collection(firestore, "usersdb"), {
        name,
        matricule,
      });
      console.log("Document written with ID: ", userRef.id);
      alert('User added to Firestore successfully!');
      setMatricule('')
      setName('')
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
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
        title="Add"
        onPress={handleAddUser}
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

export default HomeScreen;
