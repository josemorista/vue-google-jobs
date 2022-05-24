<template>
	<NavBar />
	<JobFilter></JobFilter>
</template>

<script lang="ts">
import NavBarVue from "@/components/organisms/NavBar.vue";
import { defineComponent } from "vue";
import JobFilter from "@/components/molecules/JobFilter.vue";
export default defineComponent({
	name: "JobResultsView",
	components: {
		NavBar: NavBarVue,
		JobFilter
	}
});
</script>
