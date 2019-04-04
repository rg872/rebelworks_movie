import React from 'react'
import { Provider } from 'react-redux'
import { Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

import NavigationService from '@navigation/utils/NavigationService'
import configStore from '@redux/store'
import AppContainer from '@navigation'

const store = configStore()

class App extends React.Component {
  async componentDidMount() {
   await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
   });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </Provider>
    )
  }
}

export default App
