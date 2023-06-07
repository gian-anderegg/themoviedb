<template>
  <div class="movie-page" id="page">
    <div @click="goPageBack()" class="icon"></div>
    <div class="movie-info">
      <div class="image-container">
        <img
        class="movie-image"
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        />
      </div>
      <div class="movie-data">
        <span class="movie-title">{{ movie.original_title }}</span>
        <span class="movie-release-date">{{ movie.release_date }}</span>
        <div class="movie-rating">
          <span v-for="n in rating" :key="n" class="movie-rating-hearts"></span>
        </div>
        <div class="movie-paragraph">
          <span class="movie-description-title">Description </span>
          <span class="movie-description">{{ movie.overview }}</span>
        </div>
        <div class="movie-trailer">
          <div class="trailer-text">Trailer</div>
            <iframe
              class="trailer-video"
              src="https://www.youtube.com/watch?v=vqs_0W-MSB0"
              frameborder="0"
              allowfullscreen
            ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./MoviePage.js" />

<style src="./MoviePage.css" scoped />
