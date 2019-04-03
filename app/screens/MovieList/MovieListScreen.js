import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Button,
  TextInput,
  Text,
} from 'react-native'

// import styles from './MovieListStyle'

class MovieListScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {
      baseUrl,
      getConfiguration,
      movieList,
      getMovieList,
    } = this.props

    if(!baseUrl) getConfiguration()
    if(movieList.length < 1) getMovieList()
  }

  render() {
    return (
      <View>
        <Text> TEST </Text>
      </View>
    )
  }
}

MovieListScreen.propTypes = {

}

export default MovieListScreen
