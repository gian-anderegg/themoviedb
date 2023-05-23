export default {
    name: "categories",
    data() {
      return {
        selected: true,
        selectedCategoryIds: [],
      };
    },
    props: {
      categories: Array,
    },
    methods: {
      category_clicked(id) {
        this.selectedCategoryId = this.categories
          .map((category) => {
            if (category.id == id) return { ...category, selected: true }
            return { ...category, selected: false }
          });
        this.$emit("selectedStateChange", this.selectedCategoryIds);
      },
    },
  };