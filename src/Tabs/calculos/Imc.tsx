import React, { useState } from 'react';
import {  TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack, Box,Text } from 'native-base';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { Titulo } from '../../componentes/Titulo';
import { Botao } from '../../componentes/Botao';
import { BotaoFab } from '../../componentes/BotaoFab';

export default function Imc({ navigation }) {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculation = (operation) => {
        const num1 = parseFloat(peso.replace(',', '.'));
        const num2 = parseFloat(altura.replace(',', '.'));

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Por favor, preencha os campos');
            return;
        }

        let res = num1 / (num2 * num2);

        setResult(res.toFixed(2))

    }
    const escrito = `IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.

O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.`


    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={5} bgColor="gray.100">
            <Titulo>Calculo IMC</Titulo>
            <Text>{escrito}</Text>

            <EntradaTexto
                label='Peso (ex.: 69,2)'
                placeholder='insira seu peso'
                value={peso}
                onChangeText={setPeso}
            />
            <EntradaTexto
                label='Altura (ex.: 1,70)'
                placeholder='insira sua altura'
                value={altura}
                onChangeText={setAltura}
            />
            <Botao mt={2} onPress={handleCalculation}>Calcular</Botao>
            <VStack alignSelf='start'  borderRadius={5} bgColor='darkorange' p={3} mt={10} >
                <Text color='white' fontWeight='semibold'>Seu imc: {result !== null && <Text fontWeight='semibold'>{result}</Text>}</Text>
            </VStack>
            <BotaoFab navigation={navigation} />
        </VStack>
    )
}
