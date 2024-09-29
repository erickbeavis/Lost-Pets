import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import { usePetsContext } from '~/context/petsContext'; 
import { FeedPost } from '~/components/FeedPost';
import axios from 'axios';

export const MyProfile = () => {
  const { missingPetPost } = usePetsContext();
  
  const [userData, setUserData] = useState({
    email: '',
    userName: '',
    contact: '',
    missingPets: []
  });

  const fetchUserData = async () => {
    const id = '955be872-7ee4-44dc-8592-f604c2602dc5';

    try {
      const response = await axios.get(`https://a96a-2804-14d-8e85-57c6-00-e3a5.ngrok-free.app/api/User/${id}`);
      const user = response.data;

      setUserData({
        email: user.email,
        userName: user.userName,
        contact: user.contacts[0]?.content || '',
        missingPets: user.missingPets
      });
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error.response.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  
  const renderUserInfo = () => (
    <View style={styles.userInfo}>
      <View style={styles.userInfoContent}>
        <Text style={styles.userInfoLabel}>Nome:</Text>
        <Text style={styles.userInfoValue}>{userData.userName}</Text>
      </View>
      <View style={styles.userInfoContent}>
        <Text style={styles.userInfoLabel}>Email:</Text>
        <Text style={styles.userInfoValue}>{userData.email}</Text>
      </View>
      <View style={styles.userInfoContent}>
        <Text style={styles.userInfoLabel}>Contato:</Text>
        <Text style={styles.userInfoValue}>{userData.contact}</Text>
      </View>
    </View>
  );

  
  const renderMissingPets = () => (
    <View style={styles.userInfoContent}>
      <Text style={styles.userInfoLabel}>Minhas publicações</Text>
      {missingPetPost && missingPetPost.length > 0 ? (
        <FlatList 
          data={missingPetPost}
          renderItem={({ item, index }) => <FeedPost item={item} index={index} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.userInfoValue}>Não há nenhuma publicação</Text>
      )}
    </View>
  );

  return (
    <FlatList
      data={[{}]}
      renderItem={() => (
        <View style={styles.container}>
          <Image
            style={styles.profilePicture}
            source={require('../../../assets/paw-pet-login.png')}
          />
          <Text style={styles.welcomeText}>Olá, {userData.userName}!</Text>
          {renderUserInfo()}
          {renderMissingPets()}
        </View>
      )}
      keyExtractor={() => 'unique-key'} 
    />
  );
};

export default MyProfile;
