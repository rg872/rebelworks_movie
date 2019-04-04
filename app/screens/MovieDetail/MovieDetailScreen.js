import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Content,
  Spinner,
  Text,
} from 'native-base'

import { FlatList, Image } from 'react-native'

import MovieCard from '@components/MovieCard'

import styles from './MovieDetailStyle'

class MovieDetailScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null,
  }

  componentWillMount() {
    const {
      baseUrl,
      similarMoviesPage,
      similarMovies,
      getSimilarMovies,
      selectedMovie,
    } = this.props

    getSimilarMovies({ page: similarMoviesPage.currentPage, movieId: selectedMovie.id})
  }

  render() {
    const {
      selectedMovie,
      baseUrl,
      posterSizes,
      getSimilarMovies,
      similarMoviesPage,
      isLoading,
      seeMovieDetail,
      similarMovies,
    } = this.props

    const posterSize = posterSizes[posterSizes.length - 2]

    return (
      <Container>
        <Content
          padder
          contentContainerStyle={styles.contentContainerStyle}
        >
          <Image
            source={{ uri: baseUrl + posterSize + selectedMovie.poster_path }}
            style={{ width: 400, height: 400 }}
          />
          <Text>Release Date:</Text>
          <Text style={{ marginBottom: 15 }}>{ selectedMovie.release_date }</Text>
          <Text>Summary</Text>
          <Text style={{ marginBottom: 15 }}>{ selectedMovie.overview }</Text>

          <FlatList
            horizontal
            style={styles.movieListStyle}
            data={similarMovies}
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
            onEndReached={() => getSimilarMovies({page: similarMoviesPage.currentPage + 1, movieId: selectedMovie.id})}
            onEndReachedThreshold={0.5}
            initialNumToRender={7}
          />
          {isLoading && <Spinner />}
        </Content>
      </Container>
    )
  }
}

MovieDetailScreen.propTypes = {

}

export default MovieDetailScreen
