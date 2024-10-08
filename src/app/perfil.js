import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const EditProfileScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bio, setBio] = useState('');
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
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
                <Text style={styles.label}>NOME COMPLETO</Text>
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

                <Text style={styles.label}>NÚMERO</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>BIO</Text>
                <TextInput
                    style={styles.input}
                    value={bio}
                    onChangeText={setBio}
                    multiline
                />

                <TouchableOpacity style={styles.saveButton}>
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
});

export default EditProfileScreen;
