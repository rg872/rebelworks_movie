import React from 'react'
import { Provider } from 'react-redux'

import NavigationService from '@navigation/NavigationService'
import configStore from '@redux/store'
import AppContainer from '@navigation'

const store = configStore()

export default class App extends React.Component {
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
