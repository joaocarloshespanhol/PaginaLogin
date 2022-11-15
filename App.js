import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';

export default function App() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    alert('AGUARDANDO...')
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? "padding" : "height"} style={styles.container}>
      <StatusBar style="auto" />

      <Image style ={{width:180, height:180}} source={require('./assets/telainicio2.png')} />

      <TextInput placeholder="Usuario" style={styles.textInput} onChangeText={text=>setUsuario(text)} />
      <TextInput secureTextEntry={true} placeholder="Senha" style={styles.textInput} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity style={styles.botaoEntrar} onPress={()=>entrar()}>
        <Text style={{color:'white'}}>ENTRAR</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'#DCDCDC',
    borderRadius:15,
    paddingLeft:10,
    marginBottom:10
  },
  botaoEntrar:{
    width:'100%',
    height:40,
    backgroundColor:'#708090',
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
