import axios from 'axios'

import { CORS_ANYWHERE, TVDB_API, TVDB_API_KEY, TVDB_MY_LIST_ID } from './config'

export const getMovies = async () => {
  try {
    const response = await axios.get(
      `${CORS_ANYWHERE}/${TVDB_API}/list/${TVDB_MY_LIST_ID}?api_key=${TVDB_API_KEY}`
    )
    return response.data.items
  } catch (error) {
    console.error(error)
  }
}

export const movieService = {
  getMovies
}
