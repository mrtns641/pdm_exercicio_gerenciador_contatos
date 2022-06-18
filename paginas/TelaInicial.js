import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TelaInicial = () => {
    return (
        <View style={styles.principalView}>
            <Text style={styles.titleText}>Aplicativo para Cadastro e Listagem de Contatos</Text>
        </View>
    )
}

export default TelaInicial

const styles = StyleSheet.create({
    principalView: {
        flex: 1,
        backgroundColor: 'plum',
        padding: 40
    },
    titleText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        color: 'purple'
    },
})