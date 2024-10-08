// MenuScreen.js (ou Drawer)
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importação do router

const MenuScreen = ({ toggleMenu }) => {
    const router = useRouter(); // Inicializa o router

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.username}>NUTRIFRESH</Text>
            </View>

            {/* Menu Items */}
            <View style={styles.menu}>
                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() => router.push('/salgados')} // Navegação para a página Salgados
                >
                    <Text style={styles.menuItemText}>Salgados</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() => router.push('/frutas')} // Navegação para a página Frutas
                >
                    <Text style={styles.menuItemText}>Frutas</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() => router.push('/doces')} // Navegação para a página Doces
                >
                    <Text style={styles.menuItemText}>Doces</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() => router.push('/perfil')} // Navegação para a página Perfil
                >
                    <Text style={styles.menuItemText}>Perfil</Text>
                </TouchableOpacity>

                {/* Logout */}
                <TouchableOpacity 
                    style={styles.logoutItem} 
                    onPress={toggleMenu}  // Fecha o menu ao clicar no botão de sair
                >
                    <Text style={styles.logoutText}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FF6F00', // cor amarela no cabeçalho
    padding: 20,
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  menu: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  menuItemText: {
    fontSize: 18,
    color: '#000000',
  },
  logoutItem: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#FF6F00', // cor amarela para o botão de logout
  },
});

export default MenuScreen;
