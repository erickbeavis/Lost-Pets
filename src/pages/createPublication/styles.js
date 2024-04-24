import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  textContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#228c80',
      paddingTop: StatusBar.currentHeight || 0
  }
})