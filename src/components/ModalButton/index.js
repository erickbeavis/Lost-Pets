import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles' 

export const ModalMenu = ({ visible, closeModal }) => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate('login');
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Image
              style={styles.closeButtonImg}
              source={require('../../../assets/close-icon.png')}
            />
          </TouchableOpacity>
          <View style={styles.modalHeader}>
            <Text style={styles.menuTitle}>Menu</Text>
          </View>
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Configurações</Text>
            </TouchableOpacity>
            <View style={styles.bar}></View>
            <TouchableOpacity style={[styles.menuItem, styles.logoutButton]} onPress={handleLogOut}>
              <Text style={[styles.menuItemText, styles.logoutButtonText]}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
