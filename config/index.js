import { Constants } from 'expo'

export default {
  apiKey: Constants.manifest.extra.movieDBApiKey,
  accessToken: Constants.manifest.extra.movieDBAccessToken,
  baseRequestUrl: 'https://api.themoviedb.org/3/'
}
