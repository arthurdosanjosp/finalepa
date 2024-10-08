import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
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
      <Text style={styles.title}> ALIMENTAÇÃO<br></br>SAUDÁVEL COM:</Text>

      <Animated.View style={[styles.card, { opacity: fadeAnim1 }]}>
        <TouchableOpacity onPress={() => handlePress('SalgadosScreen')} style={[styles.button, { backgroundColor: '#42A5F5' }]}>
          <Text style={styles.buttonText}></Text> {/* Texto do botão */} 
        </TouchableOpacity>
        <Text style={styles.cardText}>SALGADOS</Text> {/* Texto fora do botão */}
      </Animated.View>

      <Animated.View style={[styles.card, { opacity: fadeAnim2 }]}>
        <TouchableOpacity onPress={() => handlePress('FrutasScreen')} style={[styles.button, { backgroundColor: '#FFA500' }]}>
          <Text style={styles.buttonText}></Text> {/* Texto do botão */} 
        </TouchableOpacity>
        <Text style={styles.cardText}>FRUTAS</Text> {/* Texto fora do botão */}
      </Animated.View>

      <Animated.View style={[styles.card, { opacity: fadeAnim3 }]}>
        <TouchableOpacity onPress={() => handlePress('DocesScreen')} style={[styles.button, { backgroundColor: '#800080' }]}>
          <Text style={styles.buttonText}></Text> {/* Texto do botão */} 
        </TouchableOpacity>
        <Text style={styles.cardText}>DOCES</Text> {/* Texto fora do botão */}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Fundo branco para destaque dos elementos
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  card: {
    width: 190,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0', // Adiciona padding para organizar o layout
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black', // Texto dentro do card
    marginBottom: 10, // Espaçamento entre o texto e o botão
  },
  button: {
    width: 50, // Botões menores e quadrados
    height: 40,
    borderRadius: 10, // Cantos menos arredondados
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Texto branco para contraste
  },
});
