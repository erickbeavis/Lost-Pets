import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { TouchableOpacity, View, Image, Platform, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

import { styles } from './styles';

import { usePetsContext } from '~/context/petsContext';
import { ImageType } from '~/types/photoTypes';

export const ImagePickerScreen = () => {
  const { petPhoto, setPetPhoto } = usePetsContext();

  const pickImage = async () => {
    if (Platform.OS === 'web') return;

    const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (libraryStatus.status !== 'granted') {
      alert('Desculpe, precisamos da permissão da galeria para continuar.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) return;

    setPetPhoto((img: any) => [...img, result.assets[0]]);
  };

  const removeImage = (indexToRemove: number) => {
    setPetPhoto((images: ImageType[]) => images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fotos</Text>
        {petPhoto.length < 4 && (
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.addImg}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      {petPhoto && (
        <>
          {petPhoto.map((img: any, index: number) => {
            return (
              <View style={styles.imageContainer}>
                <Image source={{ uri: img.uri }} style={styles.image} key={index} />
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};
