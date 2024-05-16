import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    height: '100%',
  },
  sightingPlaceContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 12,
    fontWeight: 'bold',
  },
  sightingPlaceLabel: {
    marginTop: 0,
    marginBottom: 0,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  descriptionInput: {
    height: 100,
  },
  sightingAddres: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#228c80',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 50,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
