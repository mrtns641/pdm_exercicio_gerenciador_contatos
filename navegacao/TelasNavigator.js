import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaContatos from "../paginas/TelaContatos";
import TelaInicial from "../paginas/TelaInicial";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import BotaoCabecalho from '../componentes/BotaoCabecalho';

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="TelaInicial"
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name="TelaContatos" component={TelaContatos}></Stack.Screen>
            <Stack.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                            <Item
                                title="Adicionar"
                                onPress={() => {
                                    props.navigation.navigate('TelaContatos')
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container