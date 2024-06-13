import { Button, VStack, useToast, Image, Box } from 'native-base'
import { EntradaTexto } from "./componentes/EntradaTexto";
import { verificaoEmail } from './servicos/PacienteServico';
import React, { useState } from 'react';
import { Botao } from './componentes/Botao';
import Logo from './assets/Logo.png'


export default function ConfirmaEmail({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    const handleSubmit = async () => {
        const pacienteId = await verificaoEmail(email);
        if (pacienteId) {
            navigation.navigate("alteraSenha", { pacienteId });
        } else {
            console.log("Email não encontrado.");
        }
    };

    return (
        <VStack space={2} flex={1} alignItems="center" justifyContent="center" padding={'15%'}>
            <Box alignItems={"center"}>
                <Image source={Logo} alt='Logo' style={{ height: 100, width: 150 }} />
            </Box>
            <EntradaTexto
                label='Digite seu nome'
                placeholder='insira seu nome'
                value={nome}
                onChangeText={setNome}
            />
            <EntradaTexto
                label='Digite seu email'
                placeholder='insira seu email'
                value={email}
                onChangeText={setEmail}
            />
            <Botao onPress={handleSubmit} mt={0}>Alterar Senha</Botao>
        </VStack>
    );
}
