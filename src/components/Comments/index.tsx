import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Modal, Portal, TextInput, Text } from 'react-native-paper';

import { styles } from './styles';

type CommentsProps = {
  visible: boolean;
  hideModal: () => void;
};

export const Comments = ({ visible, hideModal }: CommentsProps) => {
  const [text, setText] = useState('');

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
        <View style={styles.modalInputContainer}>
          <TextInput
            placeholder="Digite o comentario..."
            maxLength={100}
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
      </Modal>
    </Portal>
  );
};
