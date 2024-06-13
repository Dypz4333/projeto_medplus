import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { CardConsulta } from "../componentes/CardConsulta";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { useState } from "react";

interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string,
}

export default function Explorar({ navigation }) {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBuscar] = useState([]);

  async function buscar() {
    if (!estado || !especialidade) return null
    const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
    if (resultado) {
      setResultadoBuscar(resultado)
      console.log(resultado)
    }
  }

  return (
    <ScrollView flex={1} bgColor="gray.100">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5} bgColor="gray.100" >
        <Titulo alignSelf={"center"} color={"brown.500"}>Agende aqui sua consulta</Titulo>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <EntradaTexto
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Botao mt={3} onPress={buscar}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="brown.500" alignSelf="center">Resultado da Busca</Titulo>
        {resultadoBusca.length < 1 && (
          <Titulo alignSelf={"center"}>
            Médico não encontrado
          </Titulo>
        )}
        {resultadoBusca?.map((especialista: Especialista, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta
              especialidade={especialista.especialidade}
              foto={especialista.imagem}
              nome={especialista.nome}
              onPress={() => navigation.navigate('Agendamento', { especialistaId: especialista.id })}
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}