import createReducer from '@redux/createReducer'

const GET_CONFIGURATION_REQUEST = 'REBELWORKS/CONFIGURATION/GET_CONFIGURATION_REQUEST'
const GET_CONFIGURATION_SUCCESS = 'REBELWORKS/CONFIGURATION/GET_CONFIGURATION_SUCCESS'
const GET_CONFIGURATION_ERROR = 'REBELWORKS/CONFIGURATION/GET_CONFIGURATION_ERROR'

const initialStates = {
  baseUrl: '',
  posterSizes: [],
  isLoading: false,
}

export default createReducer(initialStates, {
  /* MUTATION REDUCER  */


  /* ACTION REDUCER */
  [GET_CONFIGURATION_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [GET_CONFIGURATION_SUCCESS]: (state, { images: { secure_base_url: baseUrl, poster_sizes: posterSizes } }) => ({
    ...state,
    baseUrl,
    posterSizes,
    isLoading: false,
  }),
  [GET_CONFIGURATION_ERROR]: state => ({
    ...state,
    isLoading: false,
  }),
})

/* MUTATION */



/* ACTIONS */
export function getConfiguration(cb = () => {}) {
  return {
    type: [
      GET_CONFIGURATION_REQUEST,
      GET_CONFIGURATION_SUCCESS,
      GET_CONFIGURATION_ERROR,
    ],
    axiosConfig: {
      method: 'get',
      url: '/configuration'
    },
    nextAction: (res, err) => cb(res, err),
  }
}
