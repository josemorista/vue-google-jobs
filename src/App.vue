<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App"
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

  // Global classes

}
</style>