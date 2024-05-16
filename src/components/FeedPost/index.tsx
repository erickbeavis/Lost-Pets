import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';

import { styles } from './styles';
import { Comments } from '../Comments';

import { usePetsContext } from '~/context/petsContext';
import { PhotoType } from '~/types/photoTypes';

export const FeedPost = () => {
  const { missingPetPost } = usePetsContext();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.cardContainer}>
      {missingPetPost.map((post, index) => {
        console.log('TCL  post:', post);
        return (
          <Card key={index}>
            <Card.Title
              title="Bruno Tavares"
              subtitle={post.createdAt}
              titleVariant="titleMedium"
              left={(props) => (
                <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
              )}
              right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
            />
            <Card.Content>
              <Text variant="bodyLarge">{post.pet.description}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.cardImgContinainer}>
                  {post.pet.photos.map((photo: PhotoType, index: number) => {
                    return (
                      <Card.Cover
                        key={index}
                        source={{ uri: photo.location }}
                        style={styles.cardImg}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </Card.Content>
            <Chip icon="cellphone" style={styles.cardComment} onPress={showModal}>
              Contato
            </Chip>
            <Chip icon="map-marker" style={styles.cardComment} onPress={showModal}>
              Avistamentos
            </Chip>
            <Chip icon="comment" style={styles.cardComment} onPress={showModal}>
              Comentarios...
            </Chip>
            <Comments visible={visible} hideModal={hideModal} />
          </Card>
        );
      })}
    </View>
  );
};
