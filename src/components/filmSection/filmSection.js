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
        return this.clickedMovies.includes(movie);
      },
      handleClick(movie) {
        if (!this.isMovieClicked(movie)) {
          this.clickedMovies.push(movie);
        }
      },
    },
  };
  