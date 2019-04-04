import { AsyncStorage } from 'react-native'

export default {
  async isAuthorized() {
    try {
      const value = await AsyncStorage.getItem('token')
      return !!value
    } catch (error) {
      return false
    }
  },
}
