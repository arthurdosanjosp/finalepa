import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const LoginScreen = () => {
  const handleSignup = () => {
    router.push('/cadastrar'); // Assumindo que '/signup' é o caminho para a sua tela de cadastro
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.subText}>Por favor entre com sua conta</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="" placeholderTextColor="#C7C7CD" />
        
        <Text style={styles.label}>SENHA</Text>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.input2} placeholder="" secureTextEntry={true} placeholderTextColor="#C7C7CD" />
          <TouchableOpacity style={styles.eyeIcon}>
            {/* You can add an eye icon here */}
          </TouchableOpacity>
        </View>
        
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* You can add a custom checkbox here */}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>Lembre-me</Text>
        </View>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Logar</Text>
        </TouchableOpacity>
        
        <Text style={styles.signupText}>
          Não tem uma conta? <Text style={styles.signupLink} onPress={handleSignup}>Cadastrar-se</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    color: '#ddd',
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  label: {
    color: '#7A7A7A',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7C7CD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  input2: {
    borderWidth: 1,
    borderColor: '#C7C7CD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#C7C7CD',
    borderRadius: 5,
  },
  rememberMeText: {
    color: '#7A7A7A',
    marginRight: '70%',
  },
  forgotPasswordText: {
    color: '#F76D1D',
  },
  loginButton: {
    backgroundColor: '#F76D1D',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    color: '#7A7A7A',
    marginBottom: 20,
  },
  signupLink: {
    color: '#F76D1D',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#7A7A7A',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default LoginScreen;