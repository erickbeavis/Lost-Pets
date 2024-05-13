import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    maxHeight: '100%',
    height: '100%',
  },
  notFoundcontainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  addPublicationButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#228c80',
    zIndex: 999,
    top: '76%',
    right: '6%',
  },
});
