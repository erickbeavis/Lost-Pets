import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Modal, Image, Alert } from 'react-native';

import { styles } from './styles';

import { usePetsContext } from '~/context/petsContext';
import { deleteUserToken } from '~/utils/deleteUserToken';

type ModalMenuProps = {
  visible: boolean;
  closeModal: () => boolean;
};

export const ModalMenu = ({ visible, closeModal }: ModalMenuProps) => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'destructive',
        },
        {
          text: 'Sair',
          onPress: () => {
            deleteUserToken();
            navigation.reset({
              index: 0,
              routes: [{ name: 'login' }],
            });
            closeModal();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={closeModal}>
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
            <TouchableOpacity style={styles.menuItem} onPress={() => {
              navigation.navigate('myProfile')
              closeModal()
            }}>
              <Text style={styles.menuItemText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Configurações</Text>
            </TouchableOpacity>
            <View style={styles.bar} />
            <TouchableOpacity style={[styles.menuItem, styles.logoutButton]} onPress={handleLogOut}>
              <Text style={[styles.menuItemText, styles.logoutButtonText]}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
