import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export const UserListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ID</Text>
      <Text style={styles.text}>USERNAME</Text>
      <Text style={styles.text}>CHECKED</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  text: {
    flex: 1,
    fontSize: 20
  }
})