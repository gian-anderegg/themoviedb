<template>
  <div
    @click="category_clicked()"
    class="category"
    :class="{ 'category-selected': selected }"
  >
    <h4>{{ category_name }}</h4>
  </div>
</template>

<script>
export default {
  name: "categories",
  data() {
    return {
      selected: true,
    };
  },
  props: {
    category_name: String,
  },
  methods: {
    category_clicked() {
      this.selected = !this.selected;
      this.$emit("selectedStateChange", this.selected);
    },
  },
};
</script>

<style scoped>
.category {
  border: 1px solid black;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.category-selected {
  background: #7149c6;
}
</style>
