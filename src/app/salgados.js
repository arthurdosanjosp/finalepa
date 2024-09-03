import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

const categories = [
  { id: '1', title: 'Salgado de frango', price: '' },
  { id: '2', title: 'Filé de frango', price: '' },
  { id: '3', title: 'Salgado de carne magra', price: '' },
];

const recipes = {
  '1': '1. Café da manhã:\n   - Iogurte natural com frutas e aveia.\n   - Uma fatia de pão integral com queijo branco.\n   - Um suco natural de laranja.\n   - Um salgado assado de frango ou ricota.',
  '2': '2. Almoço:\n   - Salada verde com folhas, tomate, cenoura e pepino.\n  - Filé de frango grelhado ou peixe assado.\n   - Arroz integral ou quinoa.\n    - Uma pequena porção de quiche integral de legumes.',
  '3': '3. Lanche da tarde:\n    - Um smoothie de frutas com leite vegetal.\n    - Torradas integrais com patê de atum ou de grão-de-bico.\n   - Um salgado assado de carne magra ou peito de peru.',
};

const renderCategoryItem = ({ item }) => (
  <View style={styles.categoryItem}>
    <Text style={styles.categoryTitle}>{item.title}</Text>
    <Text style={styles.categoryPrice}>{item.price}</Text>
  </View>
);

export default function App() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardPress = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.deliveryToText}>NUTRIFRESH</Text>
          <TouchableOpacity style={styles.deliveryLocation}>
            <Text style={styles.locationText}>Salgados</Text>
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
          placeholder="Pesquise opções saudáveis de salgados" 
          style={styles.searchInput}
        />
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Todos os salgados</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Veja todos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
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

      {categories.map(category => (
        <TouchableOpacity 
          key={category.id} 
          style={styles.restaurantCard} 
          onPress={() => handleCardPress(category.id)}
        >
          <Text style={styles.restaurantName}>{category.title}</Text>
          <Text style={styles.restaurantDetails}>Detalhes aqui...</Text>
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantRating}>⭐Acompanhante</Text>
            <Text style={styles.restaurantDelivery}></Text>
            <Text style={styles.restaurantTime}>15 min</Text>
          </View>
          {expandedCardId === category.id && (
            <View style={styles.recipeContainer}>
              <Text style={styles.recipeText}>{recipes[category.id]}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
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
    padding: 10,
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
    backgroundColor: '#FFE5B4',
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
  restaurantDelivery: {
    fontSize: 14,
    color: '#000',
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
});
