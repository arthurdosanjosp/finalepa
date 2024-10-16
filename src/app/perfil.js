import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [originalData, setOriginalData] = useState({}); // Estado para armazenar dados originais
    const [showPassword, setShowPassword] = useState(false); 

    const router = useRouter();

    // Função para buscar dados do AsyncStorage
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedUserData = await AsyncStorage.getItem('userData');
                if (storedUserData) {
                    const userData = JSON.parse(storedUserData);
                    setFullName(userData.name);
                    setEmail(userData.email);
                    setPassword(userData.password);
                    setPhoneNumber(userData.phoneNumber || ''); // Suporte para número de telefone
                    setOriginalData(userData); // Armazena os dados originais
                }
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
                Alert.alert('Erro', 'Não foi possível carregar os dados do perfil.');
            }
        };

        loadUserData();
    }, []);

    const handleSave = async () => {
        // Verifica se houve alterações
        if (
            fullName !== originalData.name ||
            email !== originalData.email ||
            password !== originalData.password ||
            phoneNumber !== originalData.phoneNumber
        ) {
            try {
                // Atualiza os dados no AsyncStorage
                const updatedUserData = { name: fullName, email, password, phoneNumber };
                await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
                setOriginalData(updatedUserData); // Atualiza os dados originais após salvar
                Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
            } catch (error) {
                console.error("Erro ao salvar os dados:", error);
                Alert.alert('Erro', 'Não foi possível salvar os dados.');
            }
        } else {
            Alert.alert('Atenção', 'Nenhuma alteração foi feita.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push('/salgados')}>
    <Text style={styles.backArrow}>{'<'}</Text>
</TouchableOpacity>

                <Text style={styles.headerText}>Perfil</Text>
            </View>

            <View style={styles.profileImageContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }} // Aqui você pode substituir pela URL real da imagem ou uma imagem local
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.editIconContainer}>
                    <Text style={styles.editIcon}>✏️</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>NOME</Text>
                <TextInput
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.label}>EMAIL</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>SENHA</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} // Alterna entre visível/invisível
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)} // Alterna visibilidade
                    >
                        <Ionicons
                            name={showPassword ? "eye-off" : "eye"}
                            size={24}
                            color="#7A7A7A"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>NÚMERO</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F9F9F9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    backArrow: {
        fontSize: 20,
        marginRight: 10,
        color: '#000',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: '#FF6F00',
        borderRadius: 20,
        padding: 5,
    },
    editIcon: {
        fontSize: 15,
        color: '#FFF',
    },
    form: {
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#7A7A7A',
    },
    input: {
        height: 45,
        borderColor: '#EAEAEA',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#F7F7F7',
        marginBottom: 15,
    },
    saveButton: {
        backgroundColor: '#FF6F00',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
});

export default EditProfileScreen;
