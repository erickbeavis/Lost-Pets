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
  modalInputContainerAndroid: {
    marginBottom: 0,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    height: '10%',
  },
  modalInputContainerIOS: {
    marginBottom: 50,
  },
  modalCardContainer: {
    height: '78%',
    paddingBottom: 10,
    paddingTop: 10,
  },
  modalTitle: {
    width: '80%',
    textAlign: 'center',
  },
  modalCard: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: 'rgba(0,0,0, 0.0)',
  },
  modalCloseIcon: {
    backgroundColor: '#fff',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#228c80',
  },
  modalNoComments: {
    height: '100%',
    textAlign: 'center',
  },
});
