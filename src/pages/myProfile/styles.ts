import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228c80',
    padding: 25,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  userInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  userInfoLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18,
  },
  userInfoValue: {
    marginBottom: 10,
    fontSize: 16,
  },
  profilePicture: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 80,
    borderWidth: 10,
    borderColor: '#f79307',
    borderRadius: 75,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.10,
    shadowRadius: 10,
  },
});

export default styles;