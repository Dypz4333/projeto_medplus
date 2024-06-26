import { Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
  nome: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
  onPress?: () => void;
}

export function CardConsulta({
  nome,
  foto,
  data,
  especialidade,
  foiAgendado,
  foiAtendido,
  onPress
}: CardProps) {
  return (
    <VStack w="100%" bg={foiAtendido ? 'gray.200' : 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
      <VStack flexDir="row">
        <Avatar size="lg" source={{ uri: foto }} />
        <VStack pl="4">
          <Text fontSize="md" bold>{nome}</Text>
          <Text fontWeight="semibold">{especialidade}</Text>
          <Text fontWeight="semibold">{data}</Text>
        </VStack>
      </VStack>
      <Botao color='orange.400' mt={4} onPress={onPress}>
        {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
      </Botao>
    </VStack>
  )
}