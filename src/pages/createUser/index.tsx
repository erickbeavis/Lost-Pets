import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';

import { Loading } from '~/components/Loading';
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
    <>
      <Loading />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.Container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <View style={styles.form}>
              <TextInput
                style={styles.inputForm}
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
                placeholderTextColor="#000"
                autoCorrect={false}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
              <TextInput
                style={styles.inputForm}
                placeholder="Numero Telefone"
                placeholderTextColor="#000"
                autoCorrect={false}
                keyboardType="numeric"
                returnKeyType="done"
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
              <TouchableOpacity
                style={styles.buttonForm}
                onPress={() => handleRegisterUser(userData)}>
                <Text style={styles.textButton}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
