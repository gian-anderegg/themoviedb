export default {
    name: "Header",
    emits: ['search'],
    props: {
        searchStringProp: String
    },
    watch: {
        searchStringProp(newVal) {
            console.log("watch changed")
            this.searchString = newVal
        }
    },
    data() {
        return {
            searchString: this.searchStringProp,
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