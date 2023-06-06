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
      console.log(storedMovie)
      this.movie = storedMovie[0]
      this.rating = Math.round(this.movie.vote_average, 0)
      console.log(this.movie)
    }
}