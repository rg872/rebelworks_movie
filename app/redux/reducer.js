import { combineReducers } from 'redux'

/* Global */
import Configuration from '@redux/ducks/global/Configuration'

/* Screen */
import Movie from '@redux/ducks/screen/Movie'

export default combineReducers({
  /* Global */
  Configuration,

  /* Screen */
  Movie,
})
