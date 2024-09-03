import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';
import { useRouter } from 'expo-router'; // Importa o hook useRouter

export default function App() {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const router = useRouter(); // Cria uma instância do roteador

  const handlePress = (screen) => {
    router.push('/salgados'); // Navega para a tela especificada
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2, fadeAnim3]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALIMENTAÇÃO SALDÁVEL COM:</Text>

      <Animated.View style={[styles.button, { backgroundColor: '#FFE5B4', opacity: fadeAnim1 }]}>
        <TouchableOpacity onPress={() => handlePress('SalgadosScreen')}>
          <Text style={styles.buttonText}>SALGADOS</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.button, { backgroundColor: '#FFCC80', opacity: fadeAnim2 }]}>
        <TouchableOpacity onPress={() => handlePress('FrutasScreen')}>
          <Text style={styles.buttonText}>FRUTAS</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.button, { backgroundColor: '#FFB74D', opacity: fadeAnim3 }]}>
        <TouchableOpacity onPress={() => handlePress('DocesScreen')}>
          <Text style={styles.buttonText}>DOCES</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    width: 200,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
