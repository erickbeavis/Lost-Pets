import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100vh',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: '100vh',
  },
  modalHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  menuTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 0,
    height: 180,
  },
  closeButtonImg: {
    width: 50,
    height: 50,
  },
  menuItems: {
    marginBottom: 10,
    alignItems: 'center',
  },
  menuItem: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'transparent',
    width: 280,
    borderWidth: 1,
    borderColor: '#228c80',
    alignItems: 'center',
    borderRadius: 5,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#228c80',
  },
  bar: {
    borderWidth: 1,
    borderColor: '#f00',
    marginBottom: 30,
    marginTop: 10,
    width: 200,
  },
  logoutButton: {
    borderColor: '#f00',
  },
  logoutButtonText: {
    color: 'red',
  },
});
