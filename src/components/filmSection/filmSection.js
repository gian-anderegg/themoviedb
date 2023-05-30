export default {
    name: 'filmSection',
    props: {
      movies: Array,
    },
    data() {
      return {
        clickedMovies: [],
      };
    },
    methods: {
      isMovieClicked(movie) {
        this.clickedMovies = JSON.parse(localStorage.getItem('favourites')) || [];
        return this.clickedMovies.some(favourite => favourite.id === movie.id);
      },
      handleClick(movie) {
        if (!this.isMovieClicked(movie)) {
          this.clickedMovies.push(movie);
          localStorage.setItem('favourites', JSON.stringify(this.clickedMovies));
        } else {
          this.clickedMovies = this.clickedMovies.filter(item => item.id !== movie.id);
          localStorage.setItem('favourites', JSON.stringify(this.clickedMovies));
        }
      },
    },
  };
  