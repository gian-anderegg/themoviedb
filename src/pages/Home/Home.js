import category from "./../../components/categories/categories.vue"
export default {
    name: 'App',
    components: {
        category
    },
    methods: {
        selectedStateChange(selcted) {
            console.log(selcted)
        }
    }
}