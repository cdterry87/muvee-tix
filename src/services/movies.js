import axios from 'axios'

import { TVDB_API, TVDB_API_KEY } from './config'

export const getMoviesService = async () => {
  try {
    const response = await axios.get(
      `${TVDB_API}list/7071802?api_key=${TVDB_API_KEY}`,
    )
    return response.data.items
  } catch (error) {
    console.error(error)
  }
}

export const getMovieService = async id => {
  try {
    const response = await axios.get(
      `${TVDB_API}/movie/${id}?api_key=${TVDB_API_KEY}`,
    )
    return response
  } catch (error) {
    console.error(error)
  }
}
