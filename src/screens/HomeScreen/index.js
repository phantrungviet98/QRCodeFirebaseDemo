import 
  React,
  {useEffect, useState, useCallback, useRef}
  from 'react';
import {
  SafeAreaView,
  View, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import {
  BottomButton
} from '../../components/ButtomButton';
import {UserStore} from '../../stores/UserStore';

export const HomeScreen = ({navigation}) => {

  const username = useRef('')

  const onChangeText = useCallback((text) => {
    username.current = text
  }, [])

  const addUser = useCallback(() => {
    UserStore.add(username.current)
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={"Enter username"}/>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={addUser}>
        <Text>ADD</Text>
      </TouchableOpacity>
      <BottomButton
        title={"Open QR Scanner"}
        buttonStyle={styles.button}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: 'green'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red'
  },
  textInput: {
    marginTop: 20,
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
