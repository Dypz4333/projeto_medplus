import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';
import { BotaoFab } from '../componentes/BotaoFab';

export default function Recomendacoes({ navigation }) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
        aba: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
        },
        descricao: {
            marginLeft: 5,
            flexShrink: 1,
        },
    });

    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={20} bgColor="gray.100">
            <Titulo mb={3}>Recomendações de Saúde</Titulo>
            <View style={styles.aba}>
            <Ionicons name='water-outline' size={24} color='blue' />
                <Text style={styles.descricao}>
                Calcula a quantidade de água em mL que uma pessoa necessita consumir diariamente para manter a hidratação adequada para que você se mantenha saudável.
                </Text>
            </View>
            <View style={styles.aba}>
                <Ionicons name='pizza-outline' size={24} color='red' />
                <Text style={styles.descricao}>
                    Calcula a quantidade de calorias minimas que uma pessoa precisa consumir diariamente para satisfazer suas necessidades energéticas.
                </Text>
            </View>
            <View style={styles.aba}>
                <Ionicons name='fish-outline' size={24} color='green' />
                <Text style={styles.descricao}>
                    Calcula a quantidade de proteínas minimas que uma pessoa precisa consumir diariamente para manter uma ter uma vida mais saudável.
                </Text>
            </View>
            <View style={styles.aba}>
                <Ionicons name='body-outline' size={24} color='purple' />
                <Text style={styles.descricao}>
                    Calcula o Índice de Massa Corporal (IMC) de um usuário com base em sua altura e peso, fornecendo uma avaliação básica do peso corporal.
                </Text>
            </View>

            <BotaoFab navigation={navigation} />
        </VStack>
    )
}
