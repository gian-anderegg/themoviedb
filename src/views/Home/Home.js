import filmSection from "../../components/filmSection/filmSection.vue"
import categories from "../../components/categories/categories.vue"

export default {
    name: 'Home',
    components: {
        categories,
        filmSection
    },
    data() {
        return {
            categories: [{ selected: false, name: "Hello", id: 1 }, { selected: false, name: "Hello", id: 2 }, { selected: false, name: "Hello", id: 3 }, { selected: false, name: "Hello", id: 4 }]
        }
    },
    methods: {
        selectedStateChange(selected) {
            this.categories = selected
        }
    }
}