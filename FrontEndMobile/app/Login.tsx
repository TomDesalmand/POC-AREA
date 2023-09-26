/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Image } from 'react-native';

function App(props: { navigation: { navigate: (arg0: string) => void; }; }): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const myImage = require('./logo.png');

  const handleLogin = () => {
    const backendUrl = 'http://10.0.2.2:3001/login';

    fetch(backendUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: username,
            password: password
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            Alert.alert('Success', 'Logged in successfully!');
        } else {
            Alert.alert('Error', data.error || 'Login failed');
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
        Alert.alert('Error', 'Network error or server is down.');
    });
};

return (
  <View style={styles.container}>

    <View style={styles.header}>
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.description}>
        Connect <Text style={styles.greenText}>yourself</Text>.
      </Text>
    </View>

    <Image source={myImage} style={styles.image} />

    <View>
      <Text style={styles.inputDescription}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={styles.inputDescription}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerTextBefore}>No account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
      </View>

    </View>
    
  </View>
);


};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F9F0F0',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 44,
    marginTop: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  greenText: {
    color: '#008443',
  },
  inputDescription: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
    color: '#000000',
  },
  input: {
    height: 40,
    width: '90%',
    marginLeft: 15,
    marginRight: 15,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginBottom: 50,
  },
  loginButton: {
    marginTop: 20,
    width: '90%',
    marginLeft: 15,
  },
  customButton: {
    backgroundColor: '#008443',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '90%',
    marginLeft: 15,
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
},
registerText: {
  color: '#008443',
  marginTop: 5,
  textAlign: 'center',
  textDecorationLine: 'underline',
},
registerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 5,
  fontSize: 15,

  
},
registerTextBefore: {
  fontSize: 15,
  color: '#000000',
  marginTop: 5,
},
});

export default App;
