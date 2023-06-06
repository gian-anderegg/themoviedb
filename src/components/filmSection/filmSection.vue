<template>
  <div>
    <div class="search-info">
      <span class="movies-found">Movies Found: {{ moviesFound }}</span>
      <span class="movies-shown">Movies Shown: {{ movies.length }}</span>
    </div>
    <div class="film-section-wrapper">
      <div
        v-for="movie in movies"
        :key="movie"
        @click="movie_clicked(movie.id)"
      >
        <div class="grid-item" ref="gridItem">
          <h4 class="movie-title">{{ movie.title }}</h4>
          <div class="image-container">
            <img
              class="responsive-imgs"
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              @load="loadMovieAnimation"
            />
          </div>
          <div class="gardiant-container"></div>
          <span
            class="heart-icon"
            :class="{ filled: isMovieClicked(movie) }"
            @click="handleClick(movie)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./filmSection.js"></script>

<style src="./filmSection.css" scoped />
