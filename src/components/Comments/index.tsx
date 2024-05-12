import { useState } from 'react';
import { View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { Avatar, Card, IconButton, Modal, Portal, TextInput, Text } from 'react-native-paper';

import { styles } from './styles';

type CommentsProps = {
  visible: boolean;
  hideModal: () => void;
};

export const Comments = ({ visible, hideModal }: CommentsProps) => {
  const [text, setText] = useState('');

  const [comments, setComments] = useState([
    {
      id: 1,
      userId: '',
      createdAt: '',
      awnsersTo: '',
      answers: '',
      content: 'Comentario 1',
    },
    {
      id: 2,
      userId: '',
      createdAt: '',
      awnsersTo: '',
      answers: '',
      content: 'Comentario 2',
    },
    {
      id: 3,
      userId: '',
      createdAt: '',
      awnsersTo: '',
      answers: '',
      content: 'Comentario 3',
    },
  ]);

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (id: number) => {};

  const renderInputs = () => {
    return (
      <View style={styles.modalInputContainerAndroid}>
        <TextInput
          placeholder="Digite o comentario..."
          maxLength={100}
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.modalInput}
        />
      </View>
    );
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
                    subtitle="25/03/2024"
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
                    <Text>{comment.content}</Text>
                  </Card.Content>
                </Card>
              ))
            ) : (
              <Text>Não ha comentarios</Text>
            )}
          </ScrollView>
        </View>
        {Platform.OS === 'android' ? (
          renderInputs()
        ) : (
          <KeyboardAvoidingView behavior="position">
            <View style={styles.modalInputContainerIOS}>
              <TextInput
                placeholder="Digite o comentario..."
                maxLength={100}
                value={text}
                onChangeText={(text) => setText(text)}
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Modal>
    </Portal>
  );
};
