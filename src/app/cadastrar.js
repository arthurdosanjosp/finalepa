import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const router = useRouter();

  const handleSignUp = () => {
    // Aqui você pode adicionar a lógica de cadastro, se necessário
    // Depois do cadastro, navegue para a próxima tela
    router.push('/alimentos'); // Substitua '/home' pela rota desejada
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Cadastra-se</Text>
        <Text style={styles.subtitle}>Por favor cadastre para começar</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#ccc"
        />
        
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#ccc"
          keyboardType="email-address"
        />
        
        <Text style={styles.label}>SENHA</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.label}>REPITA SENHA</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
  form: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#F76D1D',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});