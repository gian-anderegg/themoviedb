import filmSection from "../../components/filmSection/filmSection.vue"

export default {
    name: 'Favourites',
    components: {
        filmSection
    },
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        search(searchQuery) {
            this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
        },
        clear() {
            this.loadMovies();
        },
        loadMovies() {
            const favourites = localStorage.getItem('favourites');
            if (favourites) this.movies = JSON.parse(favourites);
        },
    },
    async mounted() {
        // load liked movies from local storage (not from api)
        this.loadMovies();
    }
}