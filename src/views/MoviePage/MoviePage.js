import router from '@/router';
import store from "@/store"

export default{
    name: 'MoviePage',
    data(){
      return{
        movie: null
      }
    },
    methods:{
      goPageBack() {
        router.go(-1); // Go back to the previous page
      }
    },
    mounted() {
      this.movie = store.state.clickedMovie;
      console.log(store.state.clickedMovie)
    }
}