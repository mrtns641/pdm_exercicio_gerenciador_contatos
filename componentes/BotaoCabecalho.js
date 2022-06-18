import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={'purple'}
        />
    )
}

export default BotaoCabecalho

const styles = StyleSheet.create({})