<template>
  <div class="wrapper">
    <div
      @click="category_clicked(category.id)"
      class="category"
      :class="{ 'category-selected': category.selected }"
      v-for="category in categories"
      :key="category"
    >
      <div class="text">{{ category.name }}</div>
    </div>
  </div>
</template>

<script src="./categories.js"></script>

<style src="./categories.css" scoped></style>
