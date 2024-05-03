import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    maxHeight: '100vh',
    height: '100%'
  },
  notFoundcontainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notFoundText: {
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'center'
  },
  addPublicationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#228c80',
    zIndex: 999,
    top: '76%',
    right: '6%',
  },
  addPublicationIcon: {
    textAlign: 'center',
    width: 40,
    height: 40
  }
})