export default {
    name: "Header",
    emits: ['search'],
    components: {},
    data() {
        return {
            searchString: '',
        }
    },
    computed: {
        isOnHome() {
            return this.$route.path === '/home';
        },
        isOnFavourites() {
            return this.$route.path === '/favourites';
        }
    },
    methods: {
        search() {
            this.$emit("search", this.searchString);
        },
        clear() {
            this.searchString = '';
            this.$emit("clear");
        },
    }
};