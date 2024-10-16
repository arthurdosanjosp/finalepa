import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Busca os dados salvos no AsyncStorage
      const storedUserData = await AsyncStorage.getItem('userData');
      const userData = storedUserData ? JSON.parse(storedUserData) : null;

      // Verifica se o email e senha correspondem
      if (userData && userData.email === email && userData.password === password) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        router.push('/perfil'); // Redireciona para a página de perfil
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.loginText}>ENTRAR</Text>
        <Text style={styles.subText}>Por favor entre com sua conta</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#C7C7CD"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <Text style={styles.label}>SENHA</Text>
        
        <TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry={true}
          placeholderTextColor="#C7C7CD"
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Checkbox customizado pode ser inserido aqui */}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>LEMBRE-ME</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}></Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
        
        <Text style={styles.signupText}>
          Não tem uma conta? <Text style={styles.signupLink} onPress={() => router.push('/cadastrar')}>CADASTRA-SE</Text>
        </Text>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={('')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={('')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={('')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0C1C',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    color: '#aaa',
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    justifyContent: 'flex-start',
  },
  label: {
    color: '#7A7A7A',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7C7CD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 25,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
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
    right: '37%',
  },
  forgotPasswordText: {
    color: '#F76D1D',
  },
  loginButton: {
    backgroundColor: '#F76D1D',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 40,
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
  socialIcon: {
    width: 25,
    height: 25,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
    elevation: 3,
  },
});

export default LoginScreen;
