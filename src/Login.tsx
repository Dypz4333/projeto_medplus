import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity,View } from 'react-native';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import React from 'react';



export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])

  async function login() {
    const resultado = await fazerLogin(email, senha)
    if (resultado) {
      const { token } = resultado
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    }
    else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if (carregando) {
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>

      <Image source={Logo} alt='Logo' style={{height: 100, width: 150}}/>



      <Titulo color={'orange.400'}>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>
      <Botao w={'100%'} onPress={login}>Entrar</Botao>

      <TouchableOpacity onPress={() => navigation.navigate('VerificaEmail')}>
          <Text mt={3} textDecorationLine={"underline"} color="brown.500">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="brown.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}