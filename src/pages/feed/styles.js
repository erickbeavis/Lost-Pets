import { StyleSheet, StatusBar } from 'react-native';

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
  }
})