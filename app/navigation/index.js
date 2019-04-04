import { createStackNavigator, createAppContainer } from 'react-navigation'
import MovieList from '@screens/MovieList'
import MovieDetail from '@screens/MovieDetail'

const AppNavigator = createStackNavigator({
  MovieList,
  MovieDetail,
}, {
  initialRouteName: 'MovieList'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
