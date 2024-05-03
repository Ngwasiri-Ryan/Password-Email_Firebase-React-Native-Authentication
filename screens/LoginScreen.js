import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase';
import React, { useState } from 'react'

const LoginScreen = ({navigation}) => {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     
     NextScreen= () =>{
       navigation.navigate('HomeScreen')
     }
     const handleSignUp = () =>{
        const auth = getAuth();
       createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            alert('SignUp Successful')
        })
        .catch(error=> alert(error.message))
     }

     const handleSigIn = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user
            NextScreen();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Invalid entry')
          });
     }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behaviour="padding"
    >
    <View style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text =>setEmail(text) }
            style={styles.input}
        />

        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text =>setPassword(text) }
            style={styles.input}
            secureTextEntry
        />
    </View>

    <View style={styles.buttonContainer}>
         <TouchableOpacity
           onPress={handleSigIn}
           style={styles.button}
         >
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={handleSignUp}
           style={[styles.button, styles.buttonOutline]}
         >
    <Text style={styles.buttonOutlineText}>Register</Text>
         </TouchableOpacity>
    </View>
   </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
       width:'80%',
    },
    input:{
        backgroundColor:'#fff',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
      backgroundColor:'#0782f9',
      width:'100%',
      padding:15,
      borderRadius:10,
    },
    buttonOutline:{
       backgroundColor:'white',
       marginTop:5,
       borderColor:'#0782f9',
       borderWidth:2,
    },
    buttonOutlineText:{
        color:'#0782f9',
        fontSize:16,
        fontWeight:'700',
        textAlign:'center'
    },
    buttonText:{
       color:'white',
       fontWeight:'700',
       fontSize:16,
       textAlign:'center'
    },

})