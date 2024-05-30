import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Avatar,
  Card,
  IconButton,
  Text,
  Chip,
  Portal,
  Modal,
  List,
  TextInput,
} from 'react-native-paper';

import { styles } from './styles';
import { Comments } from '../Comments';
import { SightingMap } from '../SightingMap';

import { usePetsContext } from '~/context/petsContext';
import { deleteMissingPet, editMissingPet } from '~/services/MissingPets/missingPets';
import { MissingPetType } from '~/types/missingPetTypes';
import { SightingModalNavigationProp } from '~/types/navigationTypes';
import { PhotoType } from '~/types/photoTypes';
import { getUserToken } from '~/utils/getUserToken';

type FeedPostProps = {
  item: MissingPetType;
  index: number;
};

export const FeedPost = ({ item, index }: FeedPostProps) => {
  const { handleRemoveSighting, loggedUser, handleSearchMissingPet } = usePetsContext();
  const [isEditing, setIsEditing] = useState(false);
  const [petName, setPetName] = useState(item.pet.name);
  const [petSpecies, setPetSpecies] = useState(item.pet.species);
  const [petAge, setPetAge] = useState(item.pet.age.toString());
  const [userContact, setUserContact] = useState(item.user.contacts[0]?.content);
  const [petDescription, setPetDescription] = useState(item.pet.description);

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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleConfirmEdit = async (id: string) => {
    setIsEditing(false);

    const autCookie = await getUserToken();

    if (!autCookie) return;

    const body = {
      pet: {
        id,
        name: petName,
        species: petSpecies,
        age: Number(petAge),
        description: petDescription,
      },
      status: 0,
    };

    await editMissingPet(id, body, autCookie);

    handleSearchMissingPet();
  };

  const handleDelete = async (id: string) => {
    const autCookie = await getUserToken();

    if (!autCookie) return;

    await deleteMissingPet(id, autCookie);

    handleSearchMissingPet();
  };

  return (
    <View style={styles.cardContainer} key={index}>
      <Card style={{ backgroundColor: '#fffafa' }}>
        <Card.Title
          title={item.user.email}
          subtitle={new Date(item.createdAt).toLocaleDateString()}
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
                    icon={isEditing ? 'check' : 'pencil'}
                    size={15}
                    style={{ paddingLeft: 10 }}
                    onPress={() =>
                      isEditing ? handleConfirmEdit(item.pet.id) : handleEditToggle()
                    }
                  />
                  {!isEditing && (
                    <IconButton
                      {...props}
                      icon="trash-can-outline"
                      size={15}
                      style={{ paddingRight: 10 }}
                      onPress={() => handleDelete(item.id)}
                    />
                  )}
                </View>
              )}
            </>
          )}
        />
        <Card.Content>
          <View>
            <View style={{ flexWrap: 'wrap' }}>
              <List.Item
                title="Nome Pet"
                description={
                  isEditing
                    ? () => (
                        <TextInput
                          value={petName}
                          mode="outlined"
                          style={styles.editInput}
                          onChangeText={setPetName}
                        />
                      )
                    : petName
                }
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
              <List.Item
                title="Especie/Raça"
                description={
                  isEditing
                    ? () => (
                        <TextInput
                          value={petSpecies}
                          mode="outlined"
                          style={styles.editInput}
                          onChangeText={setPetSpecies}
                        />
                      )
                    : petSpecies
                }
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
              <List.Item
                title="Idade Pet"
                description={
                  isEditing
                    ? () => (
                        <TextInput
                          value={petAge}
                          mode="outlined"
                          style={styles.editInput}
                          onChangeText={setPetAge}
                          keyboardType="numeric"
                        />
                      )
                    : `${petAge} ${petAge.includes('0') ? 'meses' : 'anos'}`
                }
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
              <List.Item
                title="Contato"
                description={
                  isEditing
                    ? () => (
                        <TextInput
                          value={userContact}
                          mode="outlined"
                          style={styles.editInput}
                          keyboardType="numeric"
                          onChangeText={setUserContact}
                        />
                      )
                    : userContact
                }
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
          <Text style={styles.petDescription}>
            {isEditing ? (
              <TextInput
                value={petDescription}
                mode="outlined"
                style={[styles.editInput, styles.editTextarea]}
                keyboardType="numeric"
                multiline
                numberOfLines={4}
                onChangeText={setPetDescription}
              />
            ) : (
              petDescription
            )}
          </Text>
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
                          <Text style={styles.sightingDescription} variant="bodyMedium">
                            {description}
                          </Text>
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
