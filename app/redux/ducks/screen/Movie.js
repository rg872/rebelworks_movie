import createReducer from '@redux/createReducer'

const SET_SELECTED_MOVIE = 'REBELWORKS/MOVIE/SET_SELECTED_MOVIE'

const GET_MOVIE_LIST_REQUEST = 'REBELWORKS/MOVIE/GET_MOVIE_LIST_REQUEST'
const GET_MOVIE_LIST_SUCCESS = 'REBELWORKS/MOVIE/GET_MOVIE_LIST_SUCCESS'
const GET_MOVIE_LIST_ERROR = 'REBELWORKS/MOVIE/GET_MOVIE_LIST_ERROR'
const GET_SIMILAR_MOVIES_REQUEST = 'REBELWORKS/MOVIE/GET_SIMILAR_MOVIES_REQUEST'
const GET_SIMILAR_MOVIES_SUCCESS = 'REBELWORKS/MOVIE/GET_SIMILAR_MOVIES_SUCCESS'
const GET_SIMILAR_MOVIES_ERROR = 'REBELWORKS/MOVIE/GET_SIMILAR_MOVIES_ERROR'


const initialStates = {
  movieListPage: {
    currentPage: 1,
    totalPages: 1,
  },
  movieList: [],
  selectedMovie: {},
  similarMovies: [],
  similarMoviesPage: {
    currentPage: 1,
    totalPages: 1,
  },
  isLoading: false,
}

export default createReducer(initialStates, {
  /* MUTATION REDUCER  */
  [SET_SELECTED_MOVIE]: (state, selectedIndex) => ({
    ...state,
    selectedMovie: state.movieList[selectedIndex],
  }),

  /* ACTION REDUCER */
  [GET_MOVIE_LIST_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [GET_MOVIE_LIST_SUCCESS]: (state, { results: movieList, page: currentPage, total_pages: totalPages }) => ({
    ...state,
    movieList:[
      ...state.movieList,
      ...movieList,
    ],
    movieListPage: {
      currentPage,
      totalPages,
    },
    isLoading: false,
  }),
  [GET_MOVIE_LIST_ERROR]: state => ({
    ...state,
    isLoading: false,
  }),
  [GET_SIMILAR_MOVIES_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [GET_SIMILAR_MOVIES_SUCCESS]: (state, { results: similarMovies, page: currentPage, total_pages: totalPages }) => ({
    ...state,
    similarMovies:[
      ...state.similarMovies,
      ...similarMovies,
    ],
    similarMoviesPage: {
      currentPage,
      totalPages,
    },
    isLoading: false,
  }),
  [GET_SIMILAR_MOVIES_ERROR]: state => ({
    ...state,
    isLoading: false,
  }),
})

/* MUTATION */
export function setSelectedMovie(selectedIndex) {
  return {
    type: [SET_SELECTED_MOVIE],
    payload: selectedIndex,
  }
}


/* ACTIONS */
export function getMovieList(page, cb = () => {}) {
  return {
    type: [
      GET_MOVIE_LIST_REQUEST,
      GET_MOVIE_LIST_SUCCESS,
      GET_MOVIE_LIST_ERROR,
    ],
    axiosConfig: {
      method: 'get',
      url: '/movie/now_playing',
      params: {
        page,
      },
    },
    nextAction: (res, err) => cb(res, err),
  }
}

export function getSimilarMovies({ page, movieId }, cb = () => {}) {
  return {
    type: [
      GET_SIMILAR_MOVIES_REQUEST,
      GET_SIMILAR_MOVIES_SUCCESS,
      GET_SIMILAR_MOVIES_ERROR,
    ],
    axiosConfig: {
      method: 'get',
      url: `/movie/${movieId}/similar`,
      params: {
        page
      },
    },
    nextAction: (res, err) => cb(res, err),
  }
}
