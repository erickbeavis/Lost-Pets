import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={require('../../../assets/paw-pet-login.png')}
      />
      <Text style={styles.welcomeText}>Olá, Erick!</Text>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoLabel}>Email:</Text>
        <Text style={styles.userInfoValue}>usuario@exemplo.com</Text>
        <Text style={styles.userInfoLabel}>Senha:</Text>
        <Text style={styles.userInfoValue}>********</Text>
        <Text style={styles.userInfoLabel}>Minhas publicações</Text>
        <Text style={styles.userInfoValue}>Aqui!</Text>
      </View>
    </View>
  );
};


export default MyProfile;