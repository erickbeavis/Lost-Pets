import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { View, ScrollView, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import { Avatar, Card, IconButton, Modal, Portal, TextInput, Text } from 'react-native-paper';

import { styles } from './styles';

import { usePetsContext } from '~/context/petsContext';
import { createComment, deleteComment, updateComment } from '~/services/MissingPets/comments';
import { MissingPetType } from '~/types/missingPetTypes';
import { getUserToken } from '~/utils/getUserToken';

type CommentsProps = {
  visible: boolean;
  hideModal: () => void;
  item: MissingPetType;
};

export const Comments = ({ visible, hideModal, item }: CommentsProps) => {
  const { loggedUser } = usePetsContext();

  const [textInput, setTextInput] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [comments, setComments] = useState<any[]>(item.comments);

  const formattedDate = format(new Date(), 'dd/MM/yyyy');

  const handleAddComment = async (content: string) => {
    if (content === '') return;

    const autCookie = await getUserToken();

    if (!autCookie) return;

    const newComment = await createComment(
      {
        missingPetId: item.id,
        content,
      },
      autCookie
    );

    newComment.user = loggedUser;

    setComments([...comments, newComment]);
    setTextInput('');
  };

  const handleDeleteComment = async (id: string) => {
    Alert.alert('', 'Tem certeza que deseja excluir?', [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: async () => {
          const autCookie = await getUserToken();

          if (!autCookie) return;

          await deleteComment(id, autCookie);

          setComments(comments.filter((comment) => comment.id !== id));
        },
      },
    ]);
  };

  const handleEditComment = (id: string) => {
    setEditingCommentId(id);

    const commentToEdit = comments.find((comment) => comment.id === id);

    if (commentToEdit) setEditingText(commentToEdit.content);
  };

  const handleSaveEditComment = async () => {
    if (!editingCommentId) return;

    const autCookie = await getUserToken();

    if (!autCookie) return;

    const updatedComments = comments.map((comment) => {
      if (comment.id === editingCommentId) {
        return { ...comment, content: editingText };
      }

      return comment;
    });

    setComments(updatedComments);
    setEditingCommentId(null);

    await updateComment(
      editingCommentId,
      {
        content: editingText,
      },
      autCookie
    );
  };

  return (
    <Portal>
      <Modal visible={visible} contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalHeaderContainer}>
          <IconButton icon="close" size={30} onTouchStart={hideModal} />
          <Text variant="titleLarge" style={styles.modalTitle}>
            Comentarios
          </Text>
        </View>
        <View style={styles.modalCardContainer}>
          <ScrollView>
            {comments.length > 0 ? (
              comments.map((comment) => {
                const isUserComment = comment.user.id === loggedUser.id;

                return (
                  <Card key={comment.id} style={styles.modalCard}>
                    <Card.Title
                      title={comment.user.userName}
                      subtitle={formattedDate}
                      titleVariant="titleSmall"
                      subtitleVariant="labelSmall"
                      left={(props) => (
                        <Avatar.Icon
                          {...props}
                          icon="account"
                          style={{ backgroundColor: '#ededed' }}
                        />
                      )}
                      right={(props) => (
                        <>
                          {isUserComment && (
                            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                              <IconButton
                                {...props}
                                icon="pencil"
                                size={15}
                                style={{ paddingLeft: 10 }}
                                onPress={() => handleEditComment(comment.id)}
                              />
                              <IconButton
                                {...props}
                                icon="trash-can-outline"
                                size={15}
                                style={{ paddingRight: 10 }}
                                onPress={() => handleDeleteComment(comment.id)}
                              />
                            </View>
                          )}
                        </>
                      )}
                    />
                    <Card.Content>
                      {editingCommentId === comment.id ? (
                        <TextInput
                          value={editingText}
                          maxLength={100}
                          onChangeText={setEditingText}
                          onBlur={handleSaveEditComment}
                          autoFocus
                          mode="outlined"
                        />
                      ) : (
                        <Text>{comment.content}</Text>
                      )}
                    </Card.Content>
                  </Card>
                );
              })
            ) : (
              <Text variant="titleMedium" style={styles.modalNoComments}>
                Não ha comentarios
              </Text>
            )}
          </ScrollView>
        </View>
        {Platform.OS === 'android' ? (
          <View style={styles.modalInputContainerAndroid}>
            <TextInput
              placeholder="Comentario..."
              maxLength={100}
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
              onBlur={() => handleAddComment(textInput)}
              mode="outlined"
            />
          </View>
        ) : (
          <KeyboardAvoidingView behavior="position">
            <View style={styles.modalInputContainerIOS}>
              <TextInput
                placeholder="Comentario..."
                maxLength={100}
                value={textInput}
                onChangeText={(text) => setTextInput(text)}
                onBlur={() => handleAddComment(textInput)}
                mode="outlined"
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Modal>
    </Portal>
  );
};
