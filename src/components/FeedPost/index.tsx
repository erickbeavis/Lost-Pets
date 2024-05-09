import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';

import { styles } from './styles';
import { Comments } from '../Comments';

export const FeedPost = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.cardContainer}>
      <Card>
        <Card.Title
          title="Bruno Tavares"
          subtitle="25/03/2024"
          titleVariant="titleMedium"
          left={(props) => (
            <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
          )}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content>
          <Text variant="bodyLarge">Cachorro sumiu em tal lugar, me ajudem!!!</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardImgContinainer}>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardImg} />
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardImg} />
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardImg} />
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardImg} />
            </View>
          </ScrollView>
        </Card.Content>
        <Chip icon="comment" style={styles.cardComment} onPress={showModal}>
          Comentarios...
        </Chip>
        <Comments visible={visible} hideModal={hideModal} />
      </Card>
    </View>
  );
};
