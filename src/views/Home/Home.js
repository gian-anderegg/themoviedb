import filmSection from "../../components/filmSection/filmSection.vue"
import categories from "../../components/categories/categories.vue"
import APIService from "../../services/APIService"
import config from "../../../config/config"

export default {
    name: 'Home',
    components: {
        categories,
        filmSection,
    },
    data() {
        return {
            categories: config.movieCategories,
            movies: []
        }
    },
    methods: {
        selectedStateChange(selected) {
            this.categories = selected
        }
    },
    async mounted() {
        const res = await APIService.getMoviesContaining("The", 1);
        this.movies = res.data.results;

        console.log(res.data.results);
    }
}