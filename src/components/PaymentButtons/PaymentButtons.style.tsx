import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  sub_container: {
    flex: 0.07,
    margin: 2,
    height: Dimensions.get('screen').height / 22,
    width: Dimensions.get('screen').width / 1.01,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Dimensions.get('screen').width / 60,
  },
  methodButton: {
    flex: 1,
    padding: 10,
    width: Dimensions.get('screen').width / 3.3,
    height: Dimensions.get('screen').height / 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginLeft: 5,
    alignItems: 'center',
  },
  bt_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedMethodContainer: {
    alignItems: 'center',
  },
  selectedMethodText: {
    marginTop: 15,
    fontSize: 16,
    color: 'black',
  },
  container2: {
    flex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 32,
    fontWeight: 'bold',
    borderWidth: 1,
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 18,
  },
  buttonContainer: {
    width: '70%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  bot_top_buttons: {
    marginHorizontal: 4,
    marginVertical: 2,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    width: Dimensions.get('window').width / 2.5,
  },
});
