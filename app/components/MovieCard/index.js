import React from 'react'
import PropTypes from 'prop-types'

import { Image, TouchableOpacity } from 'react-native'
import {
  ListItem,
  Card,
  CardItem,
  Text,
} from 'native-base'

const MovieCard = (props) => (
  <TouchableOpacity onPress={props.seeMovieDetail}>
    <Card>
      <CardItem>
       <Image
          source={{ uri: props.imageUrl }}
          style={props.imageStyle}
        />
      </CardItem>
      <CardItem footer>
        <Text> { props.title } </Text>
      </CardItem>
    </Card>
  </TouchableOpacity>
)

MovieCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageStyle: PropTypes.shape({}).isRequired,
  seeMovieDetail: PropTypes.func.isRequired,
}

export default MovieCard
