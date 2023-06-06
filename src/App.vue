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
  ></router-view>
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
      this.searchString = searchString;
    },
    clear() {
      this.searchString = "";
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
