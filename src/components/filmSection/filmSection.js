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
        console.log(this.clickedMovies.includes(movie))
        return this.clickedMovies.includes(movie);
      },
      handleClick(movie) {
        if (!this.isMovieClicked(movie)) {
          this.clickedMovies.push(movie);
          localStorage.setItem('favourites', JSON.stringify(this.clickedMovies));
        } else {
          this.clickedMovies = this.clickedMovies.filter(item => item !== movie);
          localStorage.setItem('favourites', JSON.stringify(this.clickedMovies));
        }
      },
    },
    mounted() {
      this.clickedMovies = JSON.parse(localStorage.getItem('favourites'));
    }, 
  };
  