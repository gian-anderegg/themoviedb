import filmSection from "../../components/filmSection/filmSection"
import categories from "../../components/categories/categories"

export default {
    name: 'Home',
    components: {
        categories,
        filmSection
    },

    data() {
        return {
            categories: [{ selected: false, name: "Hello", id: 1 }, { selected: false, name: "Hello", id: 1 }, { selected: false, name: "Hello", id: 1 }, { selected: false, name: "Hello", id: 1 }]
        }
    }
}