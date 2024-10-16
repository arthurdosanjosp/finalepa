import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    // Validações simples
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não correspondem.');
      return;
    }

    try {
      // Salvando os dados no AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify({ name, email, password }));
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      router.push('/perfil');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados. Tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Cadastrar-se</Text>
        <Text style={styles.subtitle}>Por favor, cadastre-se para começar</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Repita a Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0C1C',
    paddingHorizontal: 20,
    justifyContent: 'center',
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
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
  },
  button: {
    backgroundColor: '#F76D1D',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#FF6B6B',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});
