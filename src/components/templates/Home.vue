<template>
	<Hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "../organisms/Hero.vue";
export default defineComponent({
	name: "HomePage",
	components: { Hero }
});
</script>