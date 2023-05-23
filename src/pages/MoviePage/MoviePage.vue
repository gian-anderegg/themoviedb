<template>
  <div class="movie-page">
    <div class="icon">icon</div>
    <div class="movie-info">
        <img class="movie-image" src="@/assets/Gradient.jpeg" />
        <div class="movie-data">
            <span class="movie-title">{{movie.title}}</span>
            <span class="movie-release-date">{{movie.date}}</span>
            <div class="movie-rating">{{movie.rating}}</div>
            <div class="move-paragraph">
                <span class="movie-description-title">Description</span>
                <span class="movie-description">{{movie.description}}</span>
            </div>
        </div>
    </div>
    <div class="movie-trailer">
        <span class="trailer-text">View the trailer here</span>
        <iframe src="" />
    </div>
  </div>
</template>

<script src="./MoviePage.js" />

<style src="./MoviePage.css" scoped />
