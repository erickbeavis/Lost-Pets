import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import { styles } from './styles';

import { Loading } from '~/components/Loading';
import { usePetsContext } from '~/context/petsContext';

export const Login = () => {
  const { handleSubmitLogin } = usePetsContext();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigation = useNavigation();

  return (
    <>
      {loading && (
        <ActivityIndicator animating color="#fff" size={50} style={styles.loadingButton} />
      )}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.Container}>
          <View style={styles.UserImage}>
            <Image source={require('../../../assets/paw-pet-login.png')} style={styles.Image} />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.inputEmail}
              placeholder="Email"
              autoCompleteType="email"
              autoCapitalize="none"
              placeholderTextColor="#000"
              onChangeText={(text) => setUserEmail(text)}
            />
            <TextInput
              style={styles.inputPassword}
              placeholder="Senha"
              autoCompleteType="password"
              autoCapitalize="none"
              autoCorrect
              placeholderTextColor="#000"
              onChangeText={(text) => setUserPassword(text)}
            />
            <TouchableOpacity
              style={styles.buttonForm}
              onPress={() => handleSubmitLogin(userEmail, userPassword)}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('createUser')}>
              <Text style={styles.ButtonCreate}>Ainda não possui uma conta?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
