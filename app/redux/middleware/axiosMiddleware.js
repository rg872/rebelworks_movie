import axios from 'axios'

import config from '@config'

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

    const { baseRequestUrl, api_key } = config

    axiosConfig.baseURL = baseRequestUrl
    axiosConfig.params = axiosConfig.params ?
      { ...axiosConfig.params, api_key } :
      { api_key }
    console.log('AXIOSCONFIG', axiosConfig) 
    next({ ...rest, type: REQUEST })

    function success(res) {
      console.log(`SUCCESS MIDDLEWARE:${SUCCESS} =>`, res.data)
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
