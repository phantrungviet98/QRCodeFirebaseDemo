import React from 'react'
import {Modal, View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native'
import QRCode from 'react-native-qrcode-svg'

export const QRCodeModal = ({visible, handleClose, user}) => {

  if (!visible) {
    return <View/>
  }

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 20}}>
      <Text style={styles.text}>{"User: " + user.username}</Text>
      <QRCode value={user.key} />
      </View>
      <TouchableOpacity
        style={styles.button} onPress={handleClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    alignContent: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: 'white',
    marginTop: 100,
  }
})

