import { View, Text, StyleSheet } from 'react-native';

export const FeedPublication = ({ username, tweet }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>
      <View style={styles.content}>
        <Text style={styles.username}>TESTANDO</Text>
        <Text style={styles.tweet}>{tweet}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#228c80',
  },
  content: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#228c80',
  },
  tweet: {
    fontSize: 14,
    color: '#FFF',
  },
});