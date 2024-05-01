import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ModalMenu } from '../ModalMenu/index';

import { styles } from './styles';

export const TopMenu = () =>{
    const [modalVisible, setModalVisible] = useState(false);

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
            {modalVisible && <ModalMenu visible={modalVisible} closeModal={() => setModalVisible(false)} />}
        </View>
    );
};
