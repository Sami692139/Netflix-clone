
const API_KEY = import.meta.env.REACT_APP_API_KEY;

const requests = {
  feacthMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  feachMovieList: `/genre/movie/list?api_key=${API_KEY}&language=en`,
};
export default requests;
