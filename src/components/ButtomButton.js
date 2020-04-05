import React, {useState, useEffect} from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Keyboard} from 'react-native'
import {withNavigation} from '@react-navigation/compat';

const MyBottomButton = ({title, buttonStyle, navigation}) => {

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardWillHide', onKeyboardDidHide);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[buttonStyle, { marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0 }]}
        onPress={() => navigation.navigate('Users')}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export const BottomButton = withNavigation(MyBottomButton)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  }
})