import { i18n } from '../../main.js';
import store from "@/store"

export default {
    name: "Header",
    emits: ['search', 'clear'],
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
        changeLanguage(event) {
            i18n.global.locale = event.target.value;
            store.commit('setQueryLanguage', i18n.global.locale);
            localStorage.setItem('language', i18n.global.locale);
        },
    }
};