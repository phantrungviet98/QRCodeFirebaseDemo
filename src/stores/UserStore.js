import {observable, action} from 'mobx'
import {FirebaseRealtimeDB} from '../services/FirebaseRealtimeDB'

class userStore {

  @observable users = []

  @action
  fetchAll = () => {
    FirebaseRealtimeDB.fetchAll()
  }

  @action
  updateUsers = (users) => {
    this.users = users
  }

  add = (username) => {
    FirebaseRealtimeDB.add(username)
  }

  @action
  updateChecked = (key) => {
    const index = this.users.findIndex(s => s.key === key)
    this.users[index].checked = true
  }

  @action
  onAddSuccess = (user) => {
    this.users.push(user)
  }
}

export const UserStore = new userStore()