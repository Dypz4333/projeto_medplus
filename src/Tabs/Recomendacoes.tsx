import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack } from 'native-base';
import { Titulo } from '../componentes/Titulo';

export default function Recomendacoes({navigation}) {
    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

    const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            width: 56,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            right: 20,
            bottom: 20,
            backgroundColor: 'darkorange',
            borderRadius: 30,
            elevation: 8,
        },
        additionalButtonsContainer: {
            position: 'absolute',
            right: 15,
            bottom: 90,
            flexDirection: 'column',
        },
        additionalButton: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: 'darkorange',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            elevation: 8,
        },
    });

    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={5} bgColor="gray.100">
            <Titulo>Recomendações de Saúde</Titulo>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => setShowAdditionalButtons(!showAdditionalButtons)}>
                <Ionicons name={showAdditionalButtons ? "close-outline" : "add-outline"} size={32} color="white" />
            </TouchableOpacity>

            {showAdditionalButtons && (
                <View style={styles.additionalButtonsContainer}>
                    <TouchableOpacity  onPress={() => navigation.navigate('Agua')} style={styles.additionalButton}>
                        <Ionicons name="water-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Calorias')} style={styles.additionalButton}>
                        <Ionicons name="pizza-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Proteinas')} style={styles.additionalButton}>
                        <Ionicons name="fish-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Imc')} style={styles.additionalButton}>
                        <Ionicons name="body-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
        </VStack>
    )
}
