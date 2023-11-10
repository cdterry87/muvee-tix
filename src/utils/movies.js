export const setMovieDetails = movie => {
  const { id, title, poster_path, release_date } = movie
  const link = (release_date && new Date(release_date) <= new Date()) ? `/movie/${id}` : '#'
  const comingSoon = require('../assets/comingsoon.png')

  return {
    id,
    link,
    title,
    image: {
      src: poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : comingSoon,
      alt: `Movie Poster for ${title}`
    }
  }
}
