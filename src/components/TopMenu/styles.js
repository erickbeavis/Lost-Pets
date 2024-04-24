import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#228c80',
    paddingLeft: 15,
    paddingRight: 15,
  },
  menuTitle: {
    color: '#FFF',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 600
  },
  menuLogoContainer: {
    backgroundColor: 'transparent'
  },
  menuLogoImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#FFF"
  },
  menuConfigContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuBarImage: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  modalCloseButtonContainer: {
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
  },
  modalCloseButton: {
    width: 50,
    height: 50
  },
  modalTitle: {
    fontSize: 45,
    fontWeight: 700,
    marginBottom: 16
  },
  modalOptionsContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'left'
  },
  modalOption: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#228c80',
    padding: 16,
    margin: 8,
    width: 200,
    alignItems: 'center'
  }
})