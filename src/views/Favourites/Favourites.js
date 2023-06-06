import filmSection from "../../components/filmSection/filmSection.vue"
import APIService from "../../services/APIService"

export default {
    name: 'Favourites',
    components: {
        filmSection
    },
    data() {
        return {
            movies: [],
            //isLoading: false,
        }
    },
    async mounted() {
        // load liked movies from local storage (not from api)
        const favourites = localStorage.getItem('favourites');
        if (favourites) this.movies = JSON.parse(favourites);
    }
}