import { Constants } from 'expo'

export default {
  api_key: Constants.manifest.extra.movieDBApiKey,
  accessToken: Constants.manifest.extra.movieDBAccessToken,
  baseRequestUrl: 'https://api.themoviedb.org/3/'
}
