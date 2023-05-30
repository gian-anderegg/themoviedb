import filmSection from "../../components/filmSection/filmSection"
import APIService from "../../services/APIService"

export default {
    name: 'Home',
    components: {
        filmSection
    },
    data() {
        return {
            movies: []
        }
    },
    async mounted() {
        // load liked movies from local storage (not from api)
        const res = await APIService.getMoviesContaining("The", 1);
        this.movies = res.data.results;
        console.log(res.data.results);
    }
}