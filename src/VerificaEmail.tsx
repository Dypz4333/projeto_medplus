import { VStack, useToast, Image, Box } from 'native-base';
import { EntradaTexto } from "./componentes/EntradaTexto";
import { verificaoEmail, enviarSenhaPorEmail } from './servicos/PacienteServico'; // Importe a função para enviar a senha por email
import React, { useState } from 'react';
import { Botao } from './componentes/Botao';
import Logo from './assets/Logo.png';

export default function ConfirmaEmail({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const toast = useToast();

    const handleSubmit = async () => {
        try {
            const pacienteId = await verificaoEmail(email);
            if (pacienteId) {
                // Se o email do paciente for encontrado, envie a senha por email
                const emailEnviado = await enviarSenhaPorEmail(email, pacienteId);
                if (emailEnviado) {
                    navigation.navigate("alteraSenha", { pacienteId });
                } else {
                    toast.show({
                        title: "Erro ao enviar o email com a senha",
                    });
                }
            } else {
                toast.show({
                    title: "Email não encontrado.",
                });
            }
        } catch (error) {
            console.error('Erro ao verificar o email:', error);
            toast.show({
                title: "Erro ao verificar o email",
            });
        }
    };

    return (
        <VStack space={2} flex={1} alignItems="center" justifyContent="center" padding={'15%'}>
            <Box alignItems="center">
                <Image source={Logo} alt='Logo' style={{ height: 100, width: 150 }} />
            </Box>
            <EntradaTexto
                label='Digite seu nome'
                placeholder='Insira seu nome'
                value={nome}
                onChangeText={setNome}
            />
            <EntradaTexto
                label='Digite seu email'
                placeholder='Insira seu email'
                value={email}
                onChangeText={setEmail}
            />
            <Botao onPress={handleSubmit} mt={0}>Enviar Senha por Email</Botao>
        </VStack>
    );
}
