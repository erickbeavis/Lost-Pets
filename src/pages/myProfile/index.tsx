import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './styles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { usePetsContext } from '~/context/petsContext';
import { FeedPost } from '~/components/FeedPost';


export const MyProfile = () => {
  const { missingPetPost } = usePetsContext()

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={require('../../../assets/paw-pet-login.png')}
        />
        <Text style={styles.welcomeText}>Olá, Erick!</Text>
        <View style={styles.userInfo}>
          <View style={styles.userInfoContent}>
            <Text style={styles.userInfoLabel}>Email:</Text>
            <Text style={styles.userInfoValue}>usuario@exemplo.com</Text>
          </View>
          <View style={styles.userInfoContent}>
            <Text style={styles.userInfoLabel}>Nome:</Text>
            <Text style={styles.userInfoValue}>Erick</Text>
          </View>
          <View style={styles.userInfoContent}>
            <Text style={styles.userInfoLabel}>Sobrenome:</Text>
            <Text style={styles.userInfoValue}>Dias</Text>
          </View>
          <View style={styles.userInfoContent}>
            <Text style={styles.userInfoLabel}>Contato:</Text>
            <Text style={styles.userInfoValue}>"(DDD)99999999"</Text>
          </View>
          <View style={styles.userInfoContent}>
            <Text style={styles.userInfoLabel}>Minhas publicações</Text>
            <Text style={styles.userInfoValue}>
              {missingPetPost.length > 0 ? (
                <FlatList 
                  data={missingPetPost}
                  renderItem={({ item, index }) => <FeedPost item={item} index={index} />}
                  style={styles.feedPostContainer}
                  keyExtractor={(item) => item.index}
                />
              ) : "Não há nenhuma publicação ainda."}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default MyProfile;