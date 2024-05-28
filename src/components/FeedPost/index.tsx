import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip, Portal, Modal, List } from 'react-native-paper';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import { styles } from './styles';
import { Comments } from '../Comments';
import { SightingMap } from '../SightingMap';

import { usePetsContext } from '~/context/petsContext';
import { MissingPetType } from '~/types/missingPetTypes';
import { SightingModalNavigationProp } from '~/types/navigationTypes';
import { PhotoType } from '~/types/photoTypes';
import { SighthingType } from '~/types/sighthingTypes';

type FeedPostProps = {
  item: MissingPetType;
  index: number;
};

export const FeedPost = ({ item, index }: FeedPostProps) => {
  const { handleRemoveSighting } = usePetsContext();
  const [visible, setVisible] = useState(false);
  const [renderPostSightings, setRenderPostSightings] = useState(false);
  const navigation = useNavigation<SightingModalNavigationProp>();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleAddPostSighting = () => {
    setRenderPostSightings(false);
    navigation.navigate('sightingModal', { isPost: true, missingPetId: item.id });
  };

  return (
    <View style={styles.cardContainer} key={index}>
      <Card>
        <Card.Title
          title={item.user.email}
          subtitle={new Date(item.createdAt).toLocaleDateString()}
          titleVariant="titleMedium"
          left={(props) => (
            <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
          )}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content>
          <View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <List.Item
                title="Nome Pet"
                description={item.pet.name}
                titleStyle={{ fontWeight: 'bold' }}
                contentStyle={{ paddingLeft: 0, marginRight: 10 }}
                style={{ width: '50%' }}
                left={(props) => (
                  <IconButton
                    {...props}
                    icon="checkbox-blank-circle"
                    size={8}
                    style={{ justifyContent: 'flex-start' }}
                  />
                )}
              />
              <List.Item
                title="Especie/Raça"
                description={item.pet.species}
                titleStyle={{ fontWeight: 'bold' }}
                contentStyle={{ paddingLeft: 0 }}
                style={{ width: '50%' }}
                left={(props) => (
                  <IconButton
                    {...props}
                    icon="checkbox-blank-circle"
                    size={8}
                    style={{ justifyContent: 'flex-start' }}
                  />
                )}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <List.Item
                title="Idade Pet"
                description={`${item.pet.age} ${item.pet.age.toString().includes('0') ? 'meses' : 'anos'}`}
                titleStyle={{ fontWeight: 'bold' }}
                contentStyle={{ paddingLeft: 0, marginRight: 10 }}
                left={(props) => (
                  <IconButton
                    {...props}
                    icon="checkbox-blank-circle"
                    size={8}
                    style={{ justifyContent: 'flex-start' }}
                  />
                )}
              />
              <List.Item
                title="Contato"
                description={item.user.contacts[0]?.content}
                titleStyle={{ fontWeight: 'bold' }}
                contentStyle={{ paddingLeft: 0 }}
                left={(props) => (
                  <IconButton
                    {...props}
                    icon="checkbox-blank-circle"
                    size={8}
                    style={{ justifyContent: 'flex-start' }}
                  />
                )}
              />
            </View>
          </View>
          <Text style={styles.petDescription}>{item.pet.description}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardImgContinainer}>
              {item.pet.photos?.map((photo: PhotoType, index: number) => {
                return (
                  <Card.Cover key={index} source={{ uri: photo.location }} style={styles.cardImg} />
                );
              })}
            </View>
          </ScrollView>
        </Card.Content>
        <Chip
          icon="map-marker"
          style={[styles.cardComment, styles.cardSightings]}
          onPress={() => setRenderPostSightings(true)}>
          Avistamentos
        </Chip>
        {renderPostSightings && (
          <Portal>
            <Modal
              visible={renderPostSightings}
              onDismiss={() => setRenderPostSightings(false)}
              style={styles.postSightingsModalContainer}
              contentContainerStyle={styles.postSightingsModalContent}>
              <ScrollView>
                <View style={styles.postSightingsModalHeader}>
                  <IconButton
                    icon="close"
                    size={30}
                    onPress={() => setRenderPostSightings(false)}
                  />
                  <IconButton
                    icon="plus"
                    size={28}
                    onPress={() => handleAddPostSighting()}
                    iconColor="#fff"
                    style={{ backgroundColor: '#228c80' }}
                  />
                </View>
                {item.sightings.map((item: SighthingType, index: number) => {
                  return (
                    <Card style={styles.sightingCard} key={index}>
                      <Card.Title
                        title={new Date(item.sightingDate).toLocaleDateString()}
                        titleVariant="titleMedium"
                        right={(props) => (
                          <IconButton
                            {...props}
                            icon="trash-can-outline"
                            onPress={() => handleRemoveSighting(item.id)}
                            style={{ paddingRight: 10 }}
                            size={20}
                          />
                        )}
                      />
                      <Card.Content>
                        <Text style={styles.sightingDescription} variant="bodyMedium">
                          {item.description}
                        </Text>
                        <Text variant="bodyMedium">{item.location?.address}</Text>
                        <View style={styles.sightingLocation}>
                          <SightingMap isModal location={item.location} />
                        </View>
                      </Card.Content>
                    </Card>
                  );
                })}
              </ScrollView>
            </Modal>
          </Portal>
        )}
        <Chip icon="comment" style={styles.cardComment} onPress={showModal}>
          Comentarios...
        </Chip>
        <Comments visible={visible} hideModal={hideModal} item={item} key={index} />
      </Card>
    </View>
  );
};
