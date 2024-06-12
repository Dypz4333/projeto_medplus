import { Paciente } from "../interfaces/Paciente";
import api from "./api";


export async function cadastrarPaciente(paciente: Paciente) {
  if (!paciente) return null;

  try {
    const resultado = await api.post('/paciente', paciente)
    console.log(resultado.data)
    return resultado.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function pegarConsultasPaciente(id: string) {
  try {
    const resultado = await api.get(`/paciente/${id}/consultas`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function pegarDadosPaciente(id: string) {
  try {
    const resultado = await api.get(`/paciente/${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
  }
}

export async function editarDados(id: string) {
  try {
    const resultado = await api.put(`/paciente/${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
  }
}

export async function verificaoEmail(email: string) {
  try {
    const resultado = await api.get(`/paciente`);
    const paciente = resultado.data.find((paciente: any) => paciente.email === email);
    if (paciente) {
      console.log("ID do paciente encontrado:", paciente.id);
      return paciente.id;
    } else {
      console.log("Email não encontrado");
      return null;
    }
  } catch (error) {
    console.log("Erro ao verificar email:", error);
    return false;
  }
}

export async function alterarSenha(token: string, id: string, novaSenha: string) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const resultado = await api.put(`/paciente/${id}`, { senha: novaSenha }, { headers });
    return resultado.data;
  } catch (error) {
    console.log("Erro ao alterar senha:", error);
    return null;
  }
}




