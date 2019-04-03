import { createStackNavigator, createAppContainer } from 'react-navigation'
import MovieList from '@screens/MovieList'

const AppNavigator = createStackNavigator({
  MovieList
}, {
  initialRouteName: 'MovieList'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
