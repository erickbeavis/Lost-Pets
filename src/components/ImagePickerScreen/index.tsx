import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Button, View, Image, Platform } from 'react-native';

import { styles } from './styles';

export const ImagePickerScreen = () => {
  const [image, setImage] = useState([]);
  console.log('TCL  ImagePickerScreen  image:', image);
  console.log('TCL  lenght', image.lenght);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }

        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
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

    if (!result.canceled) {
      setImage((img: any) => [...img, result.assets[0]]);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Adicionar Fotos" onPress={pickImage} />
      {image && (
        <View style={styles.imageContainer}>
          {image.map((img: any) => {
            return <Image source={{ uri: img.uri }} style={styles.image} />;
          })}
        </View>
      )}
    </View>
  );
};
