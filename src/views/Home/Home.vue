<template>
  <div class="wrapper">
    <categories
      class="categories"
      @selected-state-change="selectedStateChange"
      :categories="categories"
    ></categories>
  </div>
  <div class="filmSectionWrapper">
    <filmSection class="filmSection" :movies="movies" :moviesFound="moviesFound" ref="filmSectionRef" />
  </div>
  <div ref="intersectionTargetRef"></div>
</template>

<script src="./Home.js" />

<style src="./Home.css" scoped />
