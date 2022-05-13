<template>
	<SubNav />
	<main>

	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubNav from "../organisms/SubNav.vue";
export default defineComponent({
	name: "HomePage",
	components: { SubNav }
});
</script>