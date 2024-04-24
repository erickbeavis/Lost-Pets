import { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, Button } from 'react-native'

import { styles } from './styles';

export const TopMenu = () =>{
  const [modalVisible, setModalVisible] = useState(false)

  return(
    <View style={styles.container}>
      <View style={styles.menuLogoContainer}>
        <Image
          style={styles.menuLogoImage}
          source={require('../../../assets/paw-pet-login.png')}
        />
      </View>
      <Text style={styles.menuTitle}>Lost Pets</Text>
      <TouchableOpacity style={styles.menuConfigContainer} onPress={() => setModalVisible(true)}>
        <Image
          style={styles.menuBarImage}
          source={require('../../../assets/menu-lines.png')}
        />
      </TouchableOpacity >

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalCloseButtonContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)} 
          >
            <Image
              style={styles.modalCloseButton}
              source={require('../../../assets/close-icon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Menu
          </Text>
          
          <TouchableOpacity
            style={styles.modalOption}
            title='Perfil'
          >
            <Text>
              Perfil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalOption}
            title='Configurações'
          >
            <Text>
              Configurações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalOption, styles.modalOptionLogout]}
            title='Sair'
          >
            <Text>
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}