<template>
  <NavBar />
  <main class="page-content">
    <Home />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/organisms/NavBar.vue";
import Home from "@/components/templates/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Home
  },
});
</script>

<style lang="scss">
html {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    font-family: "Open Sans", sans-serif;
  }

  li,
  ul,
  ol {
    list-style: none;
  }

  a,
  button {
    cursor: pointer;
    outline: none;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }

  .page-content {
    margin-top: 64px;
  }
}
</style>
