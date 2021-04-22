<template>
  <app-header />
  <div id="view">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppHeader from "@/components/AppHeader.vue"; // @ is an alias to /src

@Options({
  components: {
    AppHeader,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#view {
  max-width: 80%;
  margin: 0 auto;
}
</style>
