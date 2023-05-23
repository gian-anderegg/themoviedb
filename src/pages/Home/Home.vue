<template>
  <div class="wrapper">
    <categories
      class="categories"
      @selected-state-change="selectedStateChange"
      :categories="categories"
    ></categories>
  </div>
</template>

<script src="./Home.js" />

<style src="./Home.css" scoped />
