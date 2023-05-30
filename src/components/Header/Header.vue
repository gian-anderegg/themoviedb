<template>
    <div v-if="isOnHome || isOnFavourites" class="header">
        <div class="header__left">
            <div v-if="isOnHome" class="title-container">
                <span class="title">The Movie</span>
                <span class="title">Database</span>
            </div>
            <span v-if="isOnFavourites" class="title">Your Favourites</span>
            <div class="search">
                <input type="search" class="searchbar form-control" v-model="searchString"/>
                <button @click="search" class="button btn btn-primary">Search</button>
                <button @click="clear" class="button btn btn-secondary">Clear</button>
            </div>            
        </div>
        <div class="header__right">
            <select class="language" data-width="fit" @change="changeLanguage">
                <option value="en">EN</option>
                <option value="de">DE</option>
            </select>
            <router-link v-if="isOnHome" to="favourites" class="button btn btn-outline-dark">Your Favourite Movies <span class="button-icon"></span></router-link>
            <router-link v-if="isOnFavourites" to="home" class="button btn btn-outline-dark">Discorver Movies <span class="search-icon"></span></router-link>
        </div>
    </div>
</template>
  
  <script src="./Header.js" />
  
  <style src="./Header.css" scoped />
  