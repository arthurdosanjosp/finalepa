import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView, Image, Animated, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MenuScreen from './drawer';

// Dados das categorias
const categories = [
  { id: '1', title: 'Banana fatiada', price: '', image: require('./img/bb.png') },
  { id: '2', title: 'Salada de fruta', price: '', image: require('./img/s.png') },
  { id: '3', title: 'Fatias de manga', price: '', image: require('./img/mm.png') },
];

// Receitas associadas às categorias
const recipes = {
  '1': '1. Café da manhã:\n   - Mingau de aveia feito com leite ou bebida vegetal.\n   - Uma banana fatiada e misturada ao mingau.\n   - Um ovo cozido.\n   - Um chá ou café sem açúcar.',
  '2': '2. Lanche da tarde:\n   - Uma salada de frutas frescas (como morango, kiwi e laranja).\n   - Um iogurte natural ou grego para acompanhar.\n   - Uma porção de granola sem açúcar ou castanhas.',
  '3': '3. Janta:\n   - Salada verde com folhas, tomate, pepino e cenoura.\n   - Filé de salmão grelhado ou frango grelhado.\n   - Arroz integral ou quinoa.\n   -  Uma sobremesa leve de fatias de manga ou abacaxi.',
};

// Definições de animação para o drawer
const screenWidth = Dimensions.get('window').width;

export default function App() {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(-screenWidth * 0.5)); // Menu começa fora da tela

  const handleCardPress = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const toggleMenu = () => {
    if (menuVisible) {
      // Ocultar menu
      Animated.timing(drawerAnimation, {
        toValue: -screenWidth * 0.5, // move o menu para fora da tela
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    } else {
      // Mostrar menu
      setMenuVisible(true);
      Animated.timing(drawerAnimation, {
        toValue: 0, // move o menu para dentro da tela
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.deliveryToText}>NUTRIFRESH</Text>
          <TouchableOpacity style={styles.deliveryLocation}>
            <Text style={styles.locationText}>Frutas</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.notificationIconContainer}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
          <View style={styles.notificationBadge} />
        </View>
      </View>

      {/* Greeting */}
      <Text style={styles.greetingText}>Olá, <Text style={styles.boldText}>Seja bem-vindo!</Text></Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#A9A9A9" />
        <TextInput 
          placeholder="Pesquise opções saudáveis de frutas" 
          style={styles.searchInput}
        />
      </View>

      {/* ScrollView para permitir rolagem completa */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Todas as frutas</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Veja todos</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              {/* Exibir imagem */}
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Text style={styles.categoryPrice}>{item.price}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={styles.categoriesContainer}
        />

        {/* Open Restaurants */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Suas receitas </Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Veja todas</Text>
          </TouchableOpacity>
        </View>

        {categories.map(category => {
          let otherImage;
          switch (category.id) {
            case '1':
              otherImage = require('./img/bnn.jpg');
              break;
            case '2':
              otherImage = require('./img/sss.jpg');
              break;
            case '3':
              otherImage = require('./img/mg.png');
              break;
            default:
              otherImage = require('./img/frango.jpg');
          }

          return (
            <TouchableOpacity 
              key={category.id} 
              style={styles.restaurantCard} 
              onPress={() => handleCardPress(category.id)}
            >
              <Image source={otherImage} style={styles.categoryImage2} />
              <Text style={styles.restaurantName}>{category.title}</Text>
              <Text style={styles.restaurantDetails}>Detalhes aqui...</Text>
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantRating}>⭐Acompanhantes</Text>
                <Text style={styles.restaurantTime}>15 min</Text>
              </View>
              {expandedCardId === category.id && (
                <View style={styles.recipeContainer}>
                  <Text style={styles.recipeText}>{recipes[category.id]}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Drawer Menu */}
      {menuVisible && (
        <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerAnimation }] }]}>
          <MenuScreen toggleMenu={toggleMenu} />  {/* Passando a função para o MenuScreen */}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  deliveryToText: {
    fontSize: 12,
    color: '#FF6F00',
  },
  deliveryLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationIconContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#FF6F00',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    alignItems: 'center',
    width: 150,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryPrice: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  categoryImage: {
    width: 100,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
  },
  categoryImage2: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  restaurantDetails: {
    fontSize: 14,
    color: '#A9A9A9',
    marginBottom: 10,
  },
  restaurantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#FF6F00',
  },
  restaurantTime: {
    fontSize: 14,
    color: '#000',
  },
  recipeContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
  },
  recipeText: {
    fontSize: 14,
  },
  drawerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  drawerContent: {
    padding: 20,
  },
  drawerText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
