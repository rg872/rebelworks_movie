import { StyleSheet } from 'react-native'
import { dimensions } from '@styles/base'

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: '10%',
    height: dimensions.fullHeight,
  },
  moviePosterStyle:{
    width: '100%',
    height: dimensions.fullHeight * 25 / 100,
  },
  movieListStyle:{
    height: dimensions.fullHeight,
  },
})

export default styles
