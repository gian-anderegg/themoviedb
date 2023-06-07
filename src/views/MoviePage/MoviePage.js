import router from '@/router';
import store from "@/store"

export default{
    name: 'MoviePage',
    data(){
      return{
        movie: null,
        rating: null
      }
    },
    methods:{
      goPageBack() {
        router.go(-1); // Go back to the previous page
      }
    },
    created() {
      const storedMovie = store.state.clickedMovie;
      this.movie = storedMovie[0]
      this.rating = Math.round(this.movie.vote_average, 0)
    },
    mounted() {
      console.log('hi');
      document.getElementById('page').style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${this.movie.backdrop_path})`;
      document.getElementById('app').style.padding = '0px';
    },
    unmounted() {
      document.getElementById('app').style.padding = '30px';
    }
}