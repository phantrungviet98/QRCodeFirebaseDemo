import React, { useEffect, useCallback, useState, useRef } from 'react'
import { View, FlatList, StyleSheet, Modal, Text, Dimensions, Alert } from 'react-native'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react'
import { UserStore } from '../../stores/UserStore'
import { UserItem } from './UserItem'
import { UserListHeader } from './UserListHeader'
import { FirebaseRealtimeDB } from '../../services/FirebaseRealtimeDB'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { QRCodeModal } from './QRCodeModal'
import { RNCamera as Camera } from 'react-native-camera';

const { height } = Dimensions.get('screen')

export const UsersScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [key, setKey] = useState('')

  const qrcodeRef = useRef(null)

  useEffect(() => {
    UserStore.fetchAll()
  }, [])

  const onPress = useCallback(() => {
    setModalVisible(true)
  }, [])

  const handleClose = useCallback(() => {
    setModalVisible(false)
  }, [])

  const onSuccess = useCallback((e) => {
    const index = UserStore.users.findIndex(s => s.key === e.data)
    if (index === -1) {
      Alert.alert(
        'Notice',
        'Invalid',
        [
          { text: 'Close', onPress: () => qrcodeRef.current.reactivate() }
        ]
      )
    } else {
      FirebaseRealtimeDB.setChecked(e.data)
      setKey(e.data)
      Alert.alert(
        'Notice',
        'Valid',
        [
          { text: 'Close', onPress: () => qrcodeRef.current.reactivate() }
        ]
      )
    }
  }, [])

  const renderItem = useCallback(({ item }) => {
    return (
      <UserItem
        id={item.key}
        name={item.username}
        checked={item.checked}
        onPress={() => {
          setSelectedUser(item)
          onPress(item)
        }} />
    )
  }, [])

  return useObserver(() => {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <QRCodeScanner
            ref={qrcodeRef}
            cameraStyle={{ height: height / 4 }}
            onRead={onSuccess}
            flashMode={Camera.Constants.FlashMode.auto}
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          ListHeaderComponent={UserListHeader}
          data={UserStore.users}
          renderItem={renderItem} />
        <QRCodeModal user={selectedUser} visible={modalVisible} handleClose={handleClose} />
      </View>
    )
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
})