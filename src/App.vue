<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header/Header.vue'
export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
:root {
  --primary-color: #7149C6;
  --secondary-color: #FC2947;
  --third-color: #FE6244;
  --fourth-color: #FFDEB9;
  --grey: #343a40;
  --dark: #191b1d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
</style>
