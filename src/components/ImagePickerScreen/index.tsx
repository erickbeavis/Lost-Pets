import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Platform, Text } from 'react-native';

import { styles } from './styles';

export const ImagePickerScreen = () => {
  const [image, setImage] = useState([]);
  console.log('TCL  ImagePickerScreen  image:', image);
  console.log('TCL  lenght', image.lenght);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'web') return;

      const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();

      if (libraryStatus.status !== 'granted') {
        alert('Desculpe, precisamos da permissão da galeria para continuar.');
      }

      if (cameraStatus.status !== 'granted') {
        alert('Desculpe, precisamos da permissão da camêra para continuar.');
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) return;

    setImage((img: any) => [...img, result.assets[0]]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fotos</Text>
        {image.length < 4 && (
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.addImg}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      {image && (
        <View style={styles.imageContainer}>
          {image.map((img: any, index: number) => {
            return <Image source={{ uri: img.uri }} style={styles.image} key={index} />;
          })}
        </View>
      )}
    </View>
  );
};
