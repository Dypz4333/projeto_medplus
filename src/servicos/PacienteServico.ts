import { Paciente } from "../interfaces/Paciente";
import api from "./api";
import nodemailer from 'nodemailer';


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

export async function editarDados(id: string, novoNome: string, novoEmail: string, novoEstado: string, novoTelefone: string) {
  try {
    const resultado = await api.put(`/paciente/${id}`, {
      nome: novoNome,
      email: novoEmail,
      endereco: {
        estado: novoEstado
      },
      telefone: novoTelefone
    });
    return resultado.data;
  } catch (error) {
    console.log(error);
    throw error;
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

export async function enviarSenhaPorEmail(email: string, senha: string) {
  try {
    // Configurações de envio de email
    const transporter = nodemailer.createTransport({
      service: 'seu provedor de email', // Exemplo: 'Gmail', 'Outlook'
      auth: {
        user: 'seu-email@example.com', // Seu email
        pass: 'sua-senha', // Sua senha
      },
    });

    // Configurações do email
    const mailOptions = {
      from: 'seu-email@example.com',
      to: email,
      subject: 'Recuperação de senha',
      text: `Sua nova senha é: ${senha}`,
    };

    // Envia o email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.response);
    return true; // Retorna true se o email for enviado com sucesso
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
    return false; // Retorna false se houver erro no envio do email
  }
}

export async function alterarSenha(token: string, id: string, novaSenha: string) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const resultado = await api.put(`/paciente/${token}`, { senha: novaSenha }, { headers });
    return resultado.data;
  } catch (error) {
    console.log("Erro ao alterar senha:", error);
    return null;
  }
}



