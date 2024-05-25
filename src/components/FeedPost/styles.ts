import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
    marginTop: 20,
  },
  cardImgContinainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    width: 280,
    height: 230,
    marginRight: 8,
  },
  cardComment: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#ededed',
  },
  cardSightings: {
    marginTop: 16,
    marginBottom: 0,
  },
  petDescription: {
    marginTop: 8,
    fontSize: 16,
  },
  postSightingsModalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    marginTop: '15%',
  },
  postSightingsModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  postSightingsModalContent: {
    width: '90%',
    maxHeight: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  sightingCard: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ccc',
    marginBottom: 30,
    marginRight: 20,
    marginLeft: 20,
  },
  sightingLocation: {
    marginTop: 10,
    marginBottom: 10,
  },
  sightingAddress: {
    marginBottom: 10,
    fontSize: 14,
  },
  sightingDescription: {
    marginBottom: 12,
  },
});
