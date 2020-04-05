import database from '@react-native-firebase/database'
import { UserStore } from '../stores/UserStore'

export class FirebaseRealtimeDB {

  static fetchAll = () => {
    database().ref('/users').on('value',
      snapshot => {
        console.log('snapshot.val()', snapshot)
        UserStore.updateUsers(this.snapshotToArray(snapshot))
      })
  }

  static alertSuccess = (key) => {
    database()
    .ref(`/users/${key}`).once('value').then(
      snapshot => {
        console.log("snapshot", snapshot.val())
        alert(`User ${snapshot.val().username} confirmed`)
      }
    )
  }
 

  static add = (username) => {
    const users = database().ref('/users').push()

    const newUser = {
      username,
      checked: false
    }

    users.set(newUser).then(() => {
      alert('added ' + username)
    })
  }

  static setChecked = (key) => {
    database()
    .ref(`/users/${key}`)
    .update({
      checked: true,
    },
    (error) => {
      if(error) {
        console.error(error);
      } else {
        this.alertSuccess(key)
      }
    })
  }

  static snapshotToArray(snapshot) {
    var returnArr = []

    snapshot.forEach(childSnapshot => {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    })

    return returnArr;
  }
}