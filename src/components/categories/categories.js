export default {
    name: "categories",
    data() {
      return {
        selected: true,
        selectedCategoryId: [],
      };
    },
    props: {
      categories: Array,
    },
    methods: {
      category_clicked(id) {
        this.selectedCategoryId = this.categories
          .map((category) => {
            if (category.id == id) return { ...category, selected: !category.selected }
            return { ...category, selected: false }
          });
        this.$emit("selectedStateChange", this.selectedCategoryId);
      },
    },
  };