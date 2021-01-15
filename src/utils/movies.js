export const setMovieDetails = movie => {
  const { id, title, poster_path } = movie
  const link = `/movie/${id}`
  return {
    id,
    link,
    title,
    image: {
      src: `https://image.tmdb.org/t/p/w500/${poster_path}`,
      alt: `Movie Poster for ${title}`
    }
  }
}
