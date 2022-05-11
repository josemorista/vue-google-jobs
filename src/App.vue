<template>
  <NavBar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/organisms/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
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
}
</style>
