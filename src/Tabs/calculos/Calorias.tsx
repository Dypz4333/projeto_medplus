import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VStack } from 'native-base';
import { Titulo } from '../../componentes/Titulo';
import { BotaoFab } from '../../componentes/BotaoFab';

export default function Calorias({navigation}) {
    

    return (
        <VStack flex={1} justifyContent={"center"} alignItems="center" p={5} bgColor="gray.100">
            <Titulo>Calorias diárias recomendadas</Titulo>
            <BotaoFab navigation={navigation}/>   
        </VStack>
    )
}
