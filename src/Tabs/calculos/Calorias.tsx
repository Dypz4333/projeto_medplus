import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack, Box, Text } from 'native-base';
import { Titulo } from '../../componentes/Titulo';
import { BotaoFab } from '../../componentes/BotaoFab';
import { Botao } from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';

export default function Calorias({ navigation }) {
    const [sexo, setSexo] = useState('');
    const [calorias, setCalorias] = useState(null);
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');

    function calculaCalorias() {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        const idadeNum = parseFloat(idade);

        if (sexo === 'homem') {
            setCalorias(calculoCaloriasHomem(pesoNum, alturaNum, idadeNum));
        } else if (sexo === 'mulher') {
            setCalorias(calculaCaloriasMulher(pesoNum, alturaNum, idadeNum));
        }
    }

    const calculoCaloriasHomem = (peso, altura, idade) => {
        return 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    }

    const calculaCaloriasMulher = (peso, altura, idade) => {
        return 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }

    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={5} bgColor="gray.100">
            <Titulo>Calorias diárias recomendadas</Titulo>
            <Text mt={7} fontWeight='semibold'>Selecione seu sexo</Text>
            <Box display={'flex'} justifyContent={'space-around'} w={'100%'} flexDirection={'row'} >
                <Botao w='30%' bgColor={sexo === 'mulher' ? 'pink.600' : 'pink.400'} onPress={() => setSexo('mulher')}>Mulher</Botao>
                <Botao w='30%' bgColor={sexo === 'homem' ? 'blue.600' : 'blue.400'} onPress={() => setSexo('homem')}>Homem</Botao>
            </Box>
            <EntradaTexto
                label='Peso em kg:'
                placeholder='Peso em kg'
                value={peso}
                onChangeText={setPeso}
                
            />
            <EntradaTexto
                label='Altura em cm:'
                placeholder='Altura em cm'
                value={altura}
                onChangeText={setAltura}
                
            />
            <EntradaTexto
                label='Idade:'
                placeholder='Idade'
                value={idade}
                onChangeText={setIdade}
                
            />

            <Botao onPress={calculaCalorias}>Calcular Calorias</Botao>

            {calorias !== null && (
                <Text mt={5} >
                    Calorias diárias recomendadas: {calorias.toFixed(2)}
                </Text>
            )}
            
            <BotaoFab navigation={navigation} />
        </VStack>
    );
}
