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
    async mounted() {
        // load liked movies from local storage (not from api)
        const favourites = localStorage.getItem('favourites');
        if (favourites) this.movies = JSON.parse(favourites);
    }
}