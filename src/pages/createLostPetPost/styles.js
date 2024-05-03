import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 600
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  cancelText: {
    color: '#f00',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'right',
    fontWeight: 600
  },
  descriptionInput: {
    height: 100,
  },
  addButton: {
    backgroundColor: '#228c80',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonLabel: {
    color: '#FFF',
    fontSize: 16,
  },
  sightingItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  sightingDate: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sightingLocation: {
    marginBottom: 5,
  },
  sightingDescription: {
    marginBottom: 5,
  },
  sightingButton: {
    backgroundColor: '#228c80',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  sightingButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#228c80',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});