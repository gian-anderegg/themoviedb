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
      loadMovieAnimation() {
        const gridItems = this.$refs.gridItem;

        for(let i=0; i < gridItems.length; i++) {
          gridItems[i].classList.add('on-load-animation')
        }
      },
      movie_clicked(movieId) {
        const movieToEmit = this.movies.filter(x => x.id == movieId)[0]
        console.log(movieToEmit)
        this.$router.push({
          name: 'destination',
         //  params: { propValue }
        });
      }
    },
  };
  