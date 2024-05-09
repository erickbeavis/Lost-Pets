import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  modalHeaderContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#ededed',
  },
  modalCardContainer: {
    height: '75%',
    paddingBottom: 10,
    paddingTop: 10,
  },
  modalInputContainer: {
    height: '15%',
    justifyContent: 'center',
  },
  modalTitle: {
    width: '80%',
    textAlign: 'center',
  },
  modalCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  modalCloseIcon: {
    backgroundColor: '#fff',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#228c80',
  },
});
