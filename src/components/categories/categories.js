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
      category_clicked() {
        this.selectedCategoryIds = this.categories
          .filter((item) => item.selected)
          .map((item) => item.id);
        this.$emit("selectedStateChange", this.selectedCategoryIds);
      },
    },
  };