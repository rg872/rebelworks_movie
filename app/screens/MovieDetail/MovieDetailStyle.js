import { StyleSheet } from 'react-native'
import { dimensions } from '@styles/base'

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: '10%',
    height: dimensions.fullHeight,
  },
  moviePosterStyle:{
    width: dimensions.fullwidth * 20 / 100,
    height: dimensions.fullHeight / 10,
  },
  movieListStyle:{
    width: dimensions.fullWidth,
  },
})

export default styles
