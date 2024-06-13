import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack } from 'native-base';
import { Titulo } from '../../componentes/Titulo';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { Botao } from '../../componentes/Botao';
import { BotaoFab } from '../../componentes/BotaoFab';

export default function Agua({ navigation }) {
    const [peso, setPeso] = useState('');
    const [aguaRecomendada, setAguaRecomendada] = useState(null);



    const calcularAguaRecomendada = () => {
        const pesoFloat = parseFloat(peso);
        if (!isNaN(pesoFloat)) {
            const aguaMinima = pesoFloat * 35;
            setAguaRecomendada(aguaMinima);
        } else {
            setAguaRecomendada(null);
        }
    }

    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={5} bgColor="gray.100">
            <Titulo>Quantidade de água diária recomendada</Titulo>
            <EntradaTexto
                label='Peso em kg'
                placeholder='Peso em kg'
                value={peso}
                onChangeText={setPeso}></EntradaTexto>
                <Botao mt={2} onPress={calcularAguaRecomendada}>Calcular</Botao>
            {aguaRecomendada !== null && (
                <Text style={{ marginTop: 20 }}>Quantidade mínima recomendada de água: {aguaRecomendada} ml</Text>
            )}
            <BotaoFab navigation={navigation}/>            
        </VStack>
    )
}
