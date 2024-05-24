import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './styles';

import { usePetsContext } from '~/context/petsContext';

export const CreateUser = () => {
  const { handleRegisterUser } = usePetsContext();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState([
    {
      type: 0,
      content: '',
      createdAt: new Date(),
      updatedAt: null,
    },
  ]);

  const userData = {
    userName,
    email,
    password,
    contacts,
  };

  return (
    <View style={styles.Container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputUserName}
          placeholder="Nome"
          autoComplete="username"
          autoCapitalize="none"
          placeholderTextColor="#000"
          autoCorrect={false}
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Email"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#000"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Senha"
          autoComplete="password"
          autoCapitalize="none"
          placeholderTextColor="#000"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.inputForm}
          placeholder="Numero Telefone"
          autoComplete="contacts"
          autoCapitalize="none"
          placeholderTextColor="#000"
          autoCorrect={false}
          onChangeText={(text) =>
            setContacts([
              {
                type: 0,
                content: text,
                createdAt: new Date(),
                updatedAt: null,
              },
            ])
          }
        />
        <TouchableOpacity style={styles.buttonForm} onPress={() => handleRegisterUser(userData)}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
