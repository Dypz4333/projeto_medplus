import { VStack, Text, ScrollView, Avatar, Divider, useToast, View,Button,Modal } from 'native-base';
import { Titulo } from '../componentes/Titulo'
import { pegarDadosPaciente } from '../servicos/PacienteServico'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Paciente } from '../interfaces/Paciente';
import { Botao } from '../componentes/Botao';
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Perfil({ navigation }) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);
  const [ampliado, setAmpliado] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toast = useToast();

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      const resultado = await pegarDadosPaciente(pacienteId);
      if (resultado) {
        setDadosPaciente(resultado);
      }
    }
    dadosPaciente();
  })

  function deslogar() {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('pacienteId');
    navigation.replace('Login');
  }
  function handleProfileClick() {
    setAmpliado(!ampliado);
  }

  return (
    <ScrollView flex={1} bgColor="gray.100">
      <VStack flex={1} alignItems="center" p={5} bgColor="gray.100">
        <Titulo color="brown.500">Meu Perfil</Titulo>
        <TouchableOpacity onPress={handleProfileClick}>
          <Avatar size={ampliado ? '400' : 'xl'} borderColor={'black'} borderWidth={2} source={{ uri: dadosPaciente?.imagem }} mt={5} />
        </TouchableOpacity>
        <Titulo color="brown.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1} color="brown.500">{dadosPaciente.nome}</Titulo>
        <Text fontSize="md" fontWeight="semibold">Email: {dadosPaciente?.email}</Text>
        <Text fontSize="md" fontWeight="semibold">Estado: {dadosPaciente?.endereco?.estado}</Text>
        <Text fontSize="md" fontWeight="semibold">Telefone: {dadosPaciente?.telefone}</Text>
        <Divider mt={5} />
        <Titulo color="brown.500" mb={1}>Planos de Saúde</Titulo>
        {
          dadosPaciente?.planosSaude?.map((plano, index) => (
            <Text fontSize="md" fontWeight="semibold" key={index}>{plano}</Text>
          ))
        }
        <Divider mt={5} />
        <Botao onPress={deslogar} >
          <View display={"flex"} color={'white'} flexDirection={"row"}>
            <Text fontSize={'lg'} color={'white'}>Deslogar </Text><Ionicons name={"log-out-outline"} size={25} color="white" />
          </View>
        </Botao>
      </VStack>
    </ScrollView>
  )
}