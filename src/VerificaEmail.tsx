import { Button, VStack, useToast } from 'native-base'
import { EntradaTexto } from "./componentes/EntradaTexto";
import { verificaoEmail } from './servicos/PacienteServico';
import React, { useState } from 'react';
import { Botao } from './componentes/Botao';


export default function ConfirmaEmail({navigation}:any) {
    const [email, setEmail] = useState('');

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
