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
            selectedCategoryRessource: '',
            movies: []
        }
    },
    props: {
        searchQuery: String
    },
    watch: {
        searchQuery(newVal) {
            if (newVal != '') {
                this.categories = config.movieCategories
            }
        }
    },
    methods: {
        // increment page function
        selectedStateChange(selected) {
            this.categories = selected;
            this.$emit("categorySelected");
            this.selectedCategoryRessource = this.categories.filter(category => category.selected === true)[0].ressource;
            this.loadMoviesByCategory(this.selectedCategoryRessource);
        },
        async loadMoviesByCategory(ressource) {
            const res = await APIService.getMoviesByCategory(ressource, 1); // increment page in future.

            if (ressource == 'latest') {
                this.movies = [];
                this.movies.push(res.data);
            } else {
                this.movies = res.data.results;
            }

            console.log(res);
        },
        async loadMovies() {
            const res = await APIService.getMovies(1); // increment page in future.
            this.movies = res.data.results;
        }
    },
    mounted() {
        this.loadMovies();
    },
}