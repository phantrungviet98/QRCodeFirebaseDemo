import React, {useCallback} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {withNavigation} from '@react-navigation/compat'

export const homeHeaderLeft = ({navigation}) => {
  const onPress = useCallback(() => {
    navigation.navigate("Users")
  }, [])

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>Users</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    borderRadius: 4,
    backgroundColor: 'red',
    padding: 10
  }
})

export const HomeHeaderLeft = withNavigation(homeHeaderLeft)