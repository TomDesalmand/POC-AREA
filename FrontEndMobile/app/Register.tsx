import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Register'
>;

type Props = {
    navigation: RegisterScreenNavigationProp;
};

function Register({ navigation }: Props): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Page</Text>
            <TouchableOpacity 
                style={styles.goBackButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#008443',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Register;
