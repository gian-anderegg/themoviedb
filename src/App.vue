<template>
  <Header
    :searchStringProp="this.searchString"
    :searchString="searchString"
    @search="search"
    @clear="clear"
  />
  <router-view
    :searchQuery="this.searchString"
    @category-selected="categorySelected"
    v-slot="{ Component }"
  >  
  <component ref="view" :is="Component" />
  </router-view>
</template>

<script>
import Header from "./components/Header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    search(searchString) {
      this.clear();
      var child = this.$refs.view;
      this.searchString = searchString;
      if(child.$options.name == 'Home') {
        child.isSearchQuery = true;
        child.loadMoviesBySearchQuery(this.searchString, 1);
        child.pageCounter = 0;
      } else if(child.$options.name == 'Favourites') {
        child.search(this.searchString);
      }      
    },
    clear() {
      var child = this.$refs.view.$.ctx;
      this.searchString = "";
      if(child.$options.name == 'Home') {
        child.isSearchQuery = false;
        child.pageCounter = 0;
        child.loadMovies(1);
      } else {
        child.clear();
      }
    },
    categorySelected() {
      this.searchString = "";
    },
  },
};
</script>

<style>
html {
  background-color: #050e13;
}

:root {
  --primary-color: #7149c6;
  --secondary-color: #fc2947;
  --third-color: #fe6244;
  --fourth-color: #ffdeb9;
  --grey: #343a40;
  --dark: #191b1d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 30px;
  background-color: #050e13;
  min-height: 100vh;

}
</style>
