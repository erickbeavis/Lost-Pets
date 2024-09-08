import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '90%',
    height: '80%',
    margin: 'auto',
    justifyContent: 'space-between',
    maxHeight: 800,
    borderRadius: 12,
  },
  modalHeaderContainer: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  modalInputContainerAndroid: {
    marginBottom: 0,
    justifyContent: 'flex-end',
    height: '10%',
  },
  modalInputContainerIOS: {
    marginBottom: 50,
  },
  modalCardContainer: {
    height: '78%',
    paddingBottom: 10,
    paddingTop: 20,
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: 40,
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
  modalNoComments: {
    height: '100%',
    textAlign: 'center',
  },
});
