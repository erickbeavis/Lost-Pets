import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  cardContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 12,
    fontWeight: 'bold',
  },
  cardLabel: {
    height: '100%',
    paddingBottom: 8,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  descriptionInput: {
    height: 100,
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
