import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack } from 'native-base';
import { Titulo } from '../../componentes/Titulo';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { Botao } from '../../componentes/Botao';
import { BotaoFab } from '../../componentes/BotaoFab';

export default function Proteinas({ navigation }) {
    const [peso, setPeso] = useState('');
    const [proteinaRecomendada, setProteinaRecomendada] = useState(null);

    const calcularProteinaRecomendada = () => {
        const pesoFloat = parseFloat(peso);
        if (!isNaN(pesoFloat)) {
            const proteinaMinima = pesoFloat * 1.2;
            setProteinaRecomendada(proteinaMinima);
        } else {
            setProteinaRecomendada(null);
        }
    }

    

    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={5} bgColor="gray.100">
            <Titulo>Calculo proteinas diárias recomendadas</Titulo>
            <EntradaTexto
                label='Peso em kg'
                placeholder='Peso em kg'
                value={peso}
                onChangeText={setPeso}></EntradaTexto>
            <Botao mt={2} onPress={calcularProteinaRecomendada}>Calcular</Botao>
            {proteinaRecomendada !== null && (
                <Text style={{ marginTop: 20 }}>Quantidade mínima de proteinas diárias: {proteinaRecomendada}g</Text>
            )}
            <BotaoFab navigation={navigation}/>   
        </VStack>
    )
}
