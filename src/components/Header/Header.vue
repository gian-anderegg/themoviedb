<template>
    <div class="header">
        <div class="header__left">
            <div v-if="isOnHome" class="title-container">
                <span class="title">The Movie</span>
                <span class="title">Database</span>
            </div>
            <span v-if="!isOnHome" class="title">Your Favourites</span>
            <input type="search" class="searchbar form-control"/>
        </div>
        <div class="header__right">
            <select class="language" data-width="fit">
                <option value="Englisch">EN</option>
                <option value="Deutsch">DE</option>
            </select>
            <router-link v-if="isOnHome" to="favourites" class="button btn btn-outline-dark">Your Favourite Movies <span class="button-icon"></span></router-link>
            <router-link v-if="!isOnHome" to="home" class="button btn btn-outline-dark">Discorver Movies <span class="search-icon"></span></router-link>
        </div>
    </div>
</template>
  
  <script src="./Header.js" />
  
  <style src="./Header.css" scoped />
  