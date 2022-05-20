<template>
  <NavBar />
  <Home />
</template>

<script lang="ts">
import NavBarVue from "@/components/organisms/NavBar.vue";
import HomeVue from "@/components/templates/Home.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Home: HomeVue,
    NavBar: NavBarVue
  }
});
</script>
