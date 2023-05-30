import { i18n } from '../../main.js';

export default {
    name: "Header",
    emits: ['search', 'clear'],
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
        changeLanguage(event) {
            i18n.global.locale = event.target.value;
            console.log(i18n.global.locale);
        },
    }
};