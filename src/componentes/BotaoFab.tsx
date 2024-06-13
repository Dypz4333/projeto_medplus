import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function BotaoFab({ navigation }) {

    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

    const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            width: 56,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
            right: 20,
            bottom: 20,
            backgroundColor: 'darkorange',
            borderRadius: 30,
            elevation: 8,
        },
        additionalButtonsContainer: {
            position: 'absolute',
            right: 15,
            bottom: 90,
            flexDirection: 'column',
        },
        additionalButton: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: 'darkorange',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            elevation: 8,
        },
    });

    return (
        <>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => setShowAdditionalButtons(!showAdditionalButtons)}>
                <Ionicons name={showAdditionalButtons ? "close-outline" : "add-outline"} size={32} color="white" />
            </TouchableOpacity>

            {showAdditionalButtons && (
                <View style={styles.additionalButtonsContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.additionalButton}>
                        <Ionicons name="home-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Agua')} style={styles.additionalButton}>
                        <Ionicons name="water-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Calorias')} style={styles.additionalButton}>
                        <Ionicons name="pizza-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Proteinas')} style={styles.additionalButton}>
                        <Ionicons name="fish-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Imc')} style={styles.additionalButton}>
                        <Ionicons name="body-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
}
