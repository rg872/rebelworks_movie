import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AsyncStorage } from 'react-native'
import NavigationService from '@navigation/utils/NavigationService'

import { getConfiguration  } from '@redux/ducks/global/Configuration'
import { setSelectedMovie, getMovieList  } from '@redux/ducks/screen/Movie'

import MovieListScreen from './MovieListScreen'

const mapStateToProps = state => ({
  baseUrl: state.Configuration.baseUrl,
  posterSizes: state.Configuration.posterSizes,
  isLoadingConfiguration: state.Configuration.isLoading,
  movieListPage: state.Movie.movieListPage,
  movieList: state.Movie.movieList,
  isLoadingMovieList: state.Movie.isLoading,
})

const actionCreators = {
  getConfiguration,
  setSelectedMovie,
  getMovieList,
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actionCreators, dispatch),
  seeMovieDetail(index) {
    dispatch(setSelectedMovie(index))
    NavigationService.navigate('MovieDetail')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieListScreen)
