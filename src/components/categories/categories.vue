<template>
  <div class="wrapper">
    <div
      @click="(category.selected = !category.selected), category_clicked()"
      class="category"
      :class="{ 'category-selected': category.selected }"
      v-for="category in categories"
      :key="category"
    >
      <h4>{{ category.name }}</h4>
    </div>
  </div>
</template>

<script src="./categories.js"></script>

<style src="./categories.css" scoped></style>
