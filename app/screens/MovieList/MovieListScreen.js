import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
} from 'native-base'

import {
  Text,
} from 'react-native'

// import styles from './MovieListStyle'

class MovieListScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null, 
  }

  componentWillMount() {
    const {
      baseUrl,
      getConfiguration,
      movieList,
      movieListPage,
      getMovieList,
    } = this.props

    if(!baseUrl) getConfiguration()
    if(movieList.length < 1) getMovieList(movieListPage.currentPage)
  }

  render() {
    return (
      <Container>
        <Text> INI </Text>
      </Container>
    )
  }
}

MovieListScreen.propTypes = {

}

export default MovieListScreen
