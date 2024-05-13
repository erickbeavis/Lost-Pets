import { format } from 'date-fns';
import { useState } from 'react';
import { View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { Avatar, Card, IconButton, Modal, Portal, TextInput, Text } from 'react-native-paper';

import { styles } from './styles';

type CommentsProps = {
  visible: boolean;
  hideModal: () => void;
};

export const Comments = ({ visible, hideModal }: CommentsProps) => {
  const [textInput, setTextInput] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [comments, setComments] = useState<any[]>([]);

  const formattedDate = format(new Date(), 'dd/MM/yyyy');

  const handleAddComment = (createdAt: string, content: string) => {
    if (content === '') return;

    const newComment = {
      id: comments.length + 1,
      userId: '',
      createdAt,
      awnsersTo: '',
      answers: '',
      content,
    };

    setComments([...comments, newComment]);
    setTextInput('');
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (id: number) => {
    setEditingCommentId(id);

    const commentToEdit = comments.find((comment) => comment.id === id);

    if (commentToEdit) setEditingText(commentToEdit.content);
  };

  const handleSaveEditComment = () => {
    if (!editingCommentId) return;

    const updatedComments = comments.map((comment) => {
      if (comment.id === editingCommentId) {
        return { ...comment, content: editingText };
      }

      return comment;
    });

    setComments(updatedComments);
    setEditingCommentId(null);
  };

  return (
    <Portal>
      <Modal visible={visible} style={styles.modalContainer}>
        <View style={styles.modalHeaderContainer}>
          <Text variant="titleLarge" style={styles.modalTitle}>
            Comentarios
          </Text>
          <Avatar.Icon
            icon="close"
            style={styles.modalCloseIcon}
            size={45}
            onTouchStart={hideModal}
          />
        </View>
        <View style={styles.modalCardContainer}>
          <ScrollView>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Card key={comment.id} style={styles.modalCard}>
                  <Card.Title
                    title="Bruno Tavares"
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
                  />
                  <Card.Content>
                    {editingCommentId === comment.id ? (
                      <TextInput
                        value={editingText}
                        maxLength={100}
                        onChangeText={setEditingText}
                        onBlur={handleSaveEditComment}
                        autoFocus
                      />
                    ) : (
                      <Text>{comment.content}</Text>
                    )}
                  </Card.Content>
                </Card>
              ))
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
              placeholder="Digite o comentario..."
              maxLength={100}
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
              onBlur={() => handleAddComment(formattedDate, textInput)}
            />
          </View>
        ) : (
          <KeyboardAvoidingView behavior="position">
            <View style={styles.modalInputContainerIOS}>
              <TextInput
                placeholder="Digite o comentario..."
                maxLength={100}
                value={textInput}
                onChangeText={(text) => setTextInput(text)}
                onBlur={() => handleAddComment(formattedDate, textInput)}
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Modal>
    </Portal>
  );
};
