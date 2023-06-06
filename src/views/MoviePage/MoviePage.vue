<template>
  <div class="movie-page">
    <div @click="goPageBack()" class="icon"></div>
    <div class="movie-info">
      <img class="movie-image" :src="'https://image.tmdb.org/t/p/w500'" />
      <div class="movie-data">
        <span class="movie-title">Title </span>
        <span class="movie-release-date">r date</span>
        <div class="movie-rating">
          <span v-for="n in 10" :key="n" class="movie-rating-hearts"></span>
        </div>
        <div class="movie-paragraph">
          <span class="movie-description-title">Description</span>
          <span class="movie-description">overview</span>
        </div>
      </div>
    </div>
    <div class="movie-trailer">
      <span class="trailer-text">View the trailer here</span>
      <iframe
        class="trailer-video"
        src="https://www.youtube.com/watch?v=vqs_0W-MSB0"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script src="./MoviePage.js" />

<style src="./MoviePage.css" scoped />
