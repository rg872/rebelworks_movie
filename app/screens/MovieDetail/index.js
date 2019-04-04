import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AsyncStorage } from 'react-native'
import NavigationService from '@navigation/utils/NavigationService'

import { getSimilarMovies, setSelectedMovie } from '@redux/ducks/screen/Movie'

import MovieDetailScreen from './MovieDetailScreen'

const mapStateToProps = state => ({
  baseUrl: state.Configuration.baseUrl,
  posterSizes: state.Configuration.posterSizes,
  similarMoviesPage: state.Movie.similarMoviesPage,
  similarMovies: state.Movie.similarMovies,
  isLoading: state.Movie.isLoading,
  selectedMovie: state.Movie.selectedMovie,
})

const actionCreators = {
  getSimilarMovies,
  setSelectedMovie,
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
)(MovieDetailScreen)
