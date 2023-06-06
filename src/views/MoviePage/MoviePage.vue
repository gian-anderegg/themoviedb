<template>
  <div class="movie-page">
    <div @click="goPageBack()" class="icon"></div>
    <div class="movie-info">
      <img class="movie-image" src="@/assets/Gradient.jpeg" />
      <div class="movie-data">
        <span class="movie-title">{{ movie.title }}</span>
        <span class="movie-release-date">{{ movie.date }}</span>
        <div class="movie-rating">
          <span v-for="n in movie.rating" :key="n" class="movie-rating-hearts"></span>
        </div>
        <div class="movie-paragraph">
          <span class="movie-description-title">Description</span>
          <span class="movie-description">{{ movie.description }}</span>
        </div>
        <div class="movie-trailer">
          <div class="trailer-text">Trailer</div>
          <div >
            <iframe class="trailer-video" src="https://www.youtube.com/watch?v=vqs_0W-MSB0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./MoviePage.js" />

<style src="./MoviePage.css" scoped />
