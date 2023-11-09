import axios from 'axios'

import { TVDB_API, TVDB_API_KEY, TVDB_MY_LIST_ID } from './config'

export const getMovies = async () => {
  try {
    const response = await axios.get(
      `${TVDB_API}/list/${TVDB_MY_LIST_ID}?api_key=${TVDB_API_KEY}`
    )
    return response.data.items
  } catch (error) {
    console.error(error)
  }
}

export const movieService = {
  getMovies
}
