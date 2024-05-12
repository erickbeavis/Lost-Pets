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
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
            <Card style={styles.modalCard}>
              <Card.Title
                title="Bruno Tavares"
                subtitle="25/03/2024"
                titleVariant="titleSmall"
                subtitleVariant="labelSmall"
                left={(props) => (
                  <Avatar.Icon {...props} icon="account" style={{ backgroundColor: '#ededed' }} />
                )}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
              <Card.Content>
                <Text>Comentario legal e etc</Text>
              </Card.Content>
            </Card>
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
