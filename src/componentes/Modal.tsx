import React, { useEffect, useState } from 'react';
import { Modal, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { pegarDadosPaciente } from '../servicos/PacienteServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Paciente } from '../interfaces/Paciente';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Botao } from './Botao';

const ModalComponent = ({ visible, onClose }) => {
    const [dadosPaciente, setDadosPaciente] = useState({} as Paciente);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        async function carregarDadosPaciente() {
            const pacienteId = await AsyncStorage.getItem('pacienteId');
            const resultado = await pegarDadosPaciente(pacienteId);
            if (resultado) {
                setDadosPaciente(resultado);
            }
        }
        carregarDadosPaciente();
    }, []);


    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={closeModal}><Ionicons name="close" size={25} color="black" /></TouchableOpacity>
                    <Image
                        style={styles.modalImage}
                        source={{ uri: dadosPaciente?.imagem }}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    modalImage: {
        width: 300,
        height: 300,
    },
    closeButton: {
        marginTop: 10,
    },
});

export default ModalComponent;
