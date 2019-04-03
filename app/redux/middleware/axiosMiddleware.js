import axios from 'axios'

import { baseRequestUrl, apiKey } from '@config'

export default function shuttleMiddleware() {
  return () => next => (action) => {
    const {
      nextAction,
      axiosConfig,
      type,
      ...rest
    } = action

    if (!axiosConfig) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = type

    axiosConfig.baseURL = baseRequestUrl
    axiosConfig.params.apiKey = apiKey

    next({ ...rest, type: REQUEST })

    function success(res) {
      next({ ...rest, payload: res.data, type: SUCCESS })
      if (nextAction) {
        nextAction(res.data, null)
      }
    }

    function error(err) {
      console.error(`ERROR MIDDLEWARE:${FAILURE} =>`, err)
      next({ ...rest, payload: err, type: FAILURE })
      if (nextAction) {
        nextAction(null, err)
      }
    }

    return axios(axiosConfig)
      .then(res => success(res))
      .catch(err => error(err))
  }
}
