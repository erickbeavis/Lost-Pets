import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, Chip, Portal, Modal, Icon } from 'react-native-paper';

import { styles } from './styles';
import { Comments } from '../Comments';
import { SightingMap } from '../SightingMap';

import { usePetsContext } from '~/context/petsContext';
import { deleteMissingPet } from '~/services/MissingPets/missingPets';
import { MissingPetType } from '~/types/missingPetTypes';
import { SightingModalNavigationProp } from '~/types/navigationTypes';
import { PhotoType } from '~/types/photoTypes';
import { getUserToken } from '~/utils/getUserToken';

type FeedPostProps = {
  item: MissingPetType;
  index: number;
};

export const FeedPost = ({ item, index }: FeedPostProps) => {
  const { handleRemoveSighting, loggedUser, handleSearchMissingPet, setLoading } = usePetsContext();

  const petName = item.pet.name;
  const petSpecies = item.pet.species;
  const petAge = item.pet.age.toString();
  const userContact = item.user.contacts[0]?.content;
  const petDescription = item.pet.description;

  const [visible, setVisible] = useState(false);
  const [renderPostSightings, setRenderPostSightings] = useState(false);

  const navigation = useNavigation<SightingModalNavigationProp>();

  const isUserPost = item.user.id === loggedUser.id;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleAddPostSighting = () => {
    setRenderPostSightings(false);

    navigation.navigate('sightingModal', { isPost: true, missingPetId: item.id });
  };

  const handleDelete = async (id: string) => {
    const autCookie = await getUserToken();

    if (!autCookie) return;

    setLoading(true);

    await deleteMissingPet(id, autCookie);

    handleSearchMissingPet();

    setLoading(false);
  };

  return (
    <View style={styles.cardContainer} key={index}>
      <Card style={{ backgroundColor: '#fffafa' }}>
        <Card.Title
          title={item.user.email}
          subtitle={new Date(item.createdAt).toLocaleString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
          titleVariant="titleMedium"
          left={(props) => (
            <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
          )}
          right={(props) => (
            <>
              {isUserPost && (
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                  <IconButton
                    {...props}
                    icon="pencil"
                    size={15}
                    style={{ paddingLeft: 10 }}
                    onPress={() =>
                      navigation.navigate('createLostPetPost', {
                        editingPost: {
                          id: item.id,
                          pet: item.pet,
                          sightings: item.sightings,
                        },
                      })
                    }
                  />

                  <IconButton
                    {...props}
                    icon="trash-can-outline"
                    size={15}
                    style={{ paddingRight: 10 }}
                    onPress={() => handleDelete(item.id)}
                  />
                </View>
              )}
            </>
          )}
        />
        <Card.Content>
          <View style={{ flexWrap: 'wrap' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={styles.postTitle}>
                {petName} | {petSpecies}
              </Text>
              <View style={styles.contactContainer}>
                <Icon source="phone" size={18} />
                <Text style={styles.postContent}>{userContact}</Text>
              </View>
              <View style={styles.ageContainer}>
                <Icon source="calendar-month" size={18} />
                <Text style={styles.postContent}>{petAge}</Text>
              </View>
            </View>
            <Text style={styles.petDescription}>{petDescription}</Text>
          </View>
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
              contentContainerStyle={styles.postSightingsModalContainer}>
              <View style={styles.postSightingsModalHeader}>
                <IconButton
                  icon="plus"
                  size={20}
                  onPress={() => handleAddPostSighting()}
                  iconColor="#fff"
                  style={{ backgroundColor: '#228c80' }}
                />
                <Text style={styles.sightingTitle}>Avistamentos</Text>
                <IconButton icon="close" size={30} onPress={() => setRenderPostSightings(false)} />
              </View>
              <ScrollView>
                {item.sightings.map(
                  ({ sightingDate, description, location, id, user }, index: number) => {
                    const isUserSighting = user.id === loggedUser.id;

                    return (
                      <Card style={styles.sightingCard} key={id}>
                        <Card.Title
                          title={new Date(sightingDate).toLocaleDateString()}
                          titleVariant="titleMedium"
                          right={(props) => (
                            <>
                              {isUserSighting && (
                                <IconButton
                                  {...props}
                                  icon="trash-can-outline"
                                  onPress={() => {
                                    if (item.sightings.length === 1) {
                                      alert(
                                        'Não foi possível remover. \n\nÉ necessário pelo menos um avistamento por publicação.'
                                      );
                                      return;
                                    }

                                    handleRemoveSighting(`${id}`);
                                    setRenderPostSightings(false);
                                  }}
                                  style={{ paddingRight: 10 }}
                                  size={20}
                                />
                              )}
                            </>
                          )}
                        />
                        <Card.Content>
                          <Text variant="bodyMedium">{description}</Text>
                          <Text variant="bodyMedium">{location?.address}</Text>
                          <View style={styles.sightingLocation}>
                            <SightingMap isModal location={location} />
                          </View>
                        </Card.Content>
                      </Card>
                    );
                  }
                )}
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
