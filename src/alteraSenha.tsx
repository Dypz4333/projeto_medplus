import React, { useState, useEffect } from "react";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { VStack, Button, useToast } from "native-base";
import { alterarSenha } from "./servicos/PacienteServico";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode"; // Importe jwtDecode
import { Botao } from "./componentes/Botao";

export default function AlteraSenha({ route, navigation }: any) {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const toast = useToast();
    const { pacienteId } = route.params;
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        // Recuperar o token do AsyncStorage quando o componente for montado
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token !== null) {
                    setToken(token);
                }
            } catch (error) {
                console.error('Erro ao recuperar o token:', error);
            }
        };

        getToken();
    }, []);

    const handleSubmit = async () => {
        // Verificar se as senhas são iguais
        if (senha !== confirmarSenha) {
            toast.show({
                title: "As senhas não são as mesmas",
            });
            return;
        }

        try {
            // Decodificar o token JWT para obter os dados do paciente
            const decodedToken: any = jwtDecode(token);
            // Envie o token decodificado e o ID do paciente para a função alterarSenha
            const novoDadosPaciente = await alterarSenha(pacienteId, senha, decodedToken);
            if (novoDadosPaciente) {
                toast.show({
                    title: "Senha alterada com sucesso",
                });
                // Limpar os campos de senha
                setSenha('');
                setConfirmarSenha('');
            } else {
                toast.show({
                    title: "Erro ao alterar a senha",
                });
            }
        } catch (error) {
            console.error('Erro ao alterar a senha:', error);
            toast.show({
                title: "Erro ao alterar a senha",
            });
        }
    };
    

    return (
        <VStack space={2} flex={1} alignItems="center" justifyContent="center" padding={'15%'}>
            <EntradaTexto
                label="Senha"
                placeholder="Insira sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <EntradaTexto
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
            />
            <Botao mt={0} onPress={handleSubmit}>Alterar Senha</Botao>
        </VStack>
    )
}
