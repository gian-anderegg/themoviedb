export default {
    name: "Header",
    components: {},
    computed: {
        isOnHome() {
            return this.$route.path === '/home';
        }
    }
};