import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Content,
  Spinner,
} from 'native-base'

import { FlatList } from 'react-native'

import MovieCard from '@components/MovieCard'

import styles from './MovieListStyle'

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
    if(movieList.length < 1) getMovieList()
  }

  render() {
    const {
      movieList,
      baseUrl,
      posterSizes,
      getMovieList,
      movieListPage,
      isLoadingMovieList,
      seeMovieDetail,
    } = this.props

    const posterSize = posterSizes[posterSizes.length - 2]

    return (
      <Container>
        <Content
          padder
          contentContainerStyle={styles.contentContainerStyle}
        >
          <FlatList
            style={styles.movieListStyle}
            data={movieList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item, index}) => (
              <MovieCard
                key={item.id}
                imageUrl={baseUrl + posterSize + item.poster_path}
                imageStyle={styles.moviePosterStyle}
                title={item.title}
                seeMovieDetail={() => seeMovieDetail(index)}
              />
            )}
            onEndReached={() => getMovieList(movieListPage.currentPage + 1)}
            onEndReachedThreshold={0.5}
            initialNumToRender={7}
          />
          {isLoadingMovieList && <Spinner />}
        </Content>
      </Container>
    )
  }
}

MovieListScreen.propTypes = {

}

export default MovieListScreen
