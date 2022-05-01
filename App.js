import { useState } from 'react';
import { 
  Button,
  FlatList,
  StyleSheet, 
  Text, 
  TextInput,
  View 
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nomes, setNomes] = useState([])
  const [contadorNome, setContadorNome] = useState(0)

  const capturarNome = (nomeDigitado) => {
    setNome(nomeDigitado)
  }

  const capturarTelefone = (telefoneDigitado) => {
    setTelefone(telefoneDigitado)
  }

  const adicionar = () => {
    setNomes(nomes => {
      setContadorNome(contadorNome + 1)
      return [{key: contadorNome.toString(), value: nome, telefone: telefone}, ...nomes]
    })
  }

  return (
    <View style={styles.principalView}>
      <View>
        <Text style={styles.titleText}>Cadastro e Listagem de Contatos</Text>
        <TextInput
          style={styles.inputText}
          placeholder='Digite o nome'
          onChangeText={capturarNome}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Digite o número de telefone'
          onChangeText={capturarTelefone}
        />
        <Button
          title="Adicionar novo contato"
          color="purple"
          onPress={adicionar}
        />
      </View>
      <FlatList
        data={nomes}
        renderItem={
          n => (
            <View style={styles.listItem}>
              <Text style={styles.contactText}>Nome: {n.item.value}</Text>
              <Text style={styles.contactText}>Telefone: {n.item.telefone}</Text>
            </View>
          )
        }
      />
    </View>
  );
}

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
  inputText: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    margin: 8,
    padding: 12
  },
  listItem: {
    padding: 20,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
  },
  contactText: {
    fontSize: 16
  }
});
