import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export const UserItem = ({id, name, checked, onPress}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text numberOfLines={1} style={{flex: 1}}>{id}</Text>
      <Text numberOfLines={1} style={{flex: 1}}>{name}</Text>
      <Text numberOfLines={1} style={[{flex: 1}, {backgroundColor: checked ? 'green' : 'red'}]}>{checked + ''}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    backgroundColor: 'gray',
    flex: 1,
    paddingVertical: 4,
    flexDirection: 'row',
  }
})