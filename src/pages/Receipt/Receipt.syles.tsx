import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  date: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  summaryContainer: {
    padding: 10,
    margin: 10,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    margin: 2,
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 11.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  emailModalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  emailModalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  emailInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    width: '100%',
  },
  emailModalButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '100%',
    marginBottom: 10,
  },
  text_button: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userInfoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
