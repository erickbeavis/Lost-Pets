import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  addImg: {
    fontSize: 28,
    marginRight: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginRight: 20,
  },
});
