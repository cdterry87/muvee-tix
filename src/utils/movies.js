export const setMovieDetails = movie => {
  const { id, title, poster_path } = movie
  const link = `/movie/${id}`
  const comingSoon = require('../assets/comingsoon.jpg')

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
