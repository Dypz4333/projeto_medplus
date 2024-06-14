import React, { useState } from "react";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { VStack, useToast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Botao } from "./componentes/Botao";

// Importe a função para alterar a senha do paciente
import { alterarSenha } from "./servicos/PacienteServico";

export default function AlteraSenha({ route, navigation }: any) {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const toast = useToast();
    const { pacienteId } = route.params;

    async function obterToken() {
        const token = await AsyncStorage.getItem('token');
        return token ? `Bearer ${token}` : null;
    }

    const handleSubmit = async () => {
        // Verificar se as senhas são iguais
        if (senha !== confirmarSenha) {
            toast.show({
                title: "As senhas não são as mesmas",
            });
            return;
        }

        const token = await obterToken();
        if (!token) {
            console.error("Nenhum token encontrado.");
            return;
        }

        try {
            // Chamar a função para alterar a senha do paciente
            const resultado = await alterarSenha(pacienteId, senha);
            if (resultado) {
                console.log("Senha alterada com sucesso:", resultado);
                toast.show({
                    title: "Senha alterada com sucesso",
                });
            } else {
                console.error("Erro ao alterar a senha");
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
                label="Nova Senha"
                placeholder="Insira sua nova senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <EntradaTexto
                label="Confirme sua Senha"
                placeholder="Confirme sua nova senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
            />
            <Botao mt={0} onPress={handleSubmit}>Alterar Senha</Botao>
        </VStack>
    );
}
