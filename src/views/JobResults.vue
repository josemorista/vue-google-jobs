<template>
	<NavBar />
	<main class="jobResultsView">
		<JobFilter></JobFilter>
		<JobList :jobs="jobs" />
	</main>
	<div id="jobListsIntersect" style="height:1px;"></div>
</template>

<script lang="ts">
import NavBarVue from "@/components/organisms/NavBar.vue";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import JobFilter from "@/components/molecules/JobFilter.vue";
import JobList from "@/components/organisms/JobList.vue";
import { Actions } from "@/store/actions";

export default defineComponent({
	name: "JobResultsView",
	components: {
		NavBar: NavBarVue,
		JobFilter,
		JobList
	},
	methods: {
		async fetchJobs() {
			this[Actions.FETCH_JOBS](this.page);
			this.page++;
		},
		...mapActions([Actions.FETCH_JOBS])
	},
	data(): { page: number, intersectionObserver: IntersectionObserver | null } {
		return {
			page: 0,
			intersectionObserver: null
		};
	},
	computed: {
		...mapState(["jobs"])
	},
	mounted() {
		this.intersectionObserver = new IntersectionObserver(async ([entry]) => {
			if (entry && entry.isIntersecting) {
				await this.fetchJobs();
			}
		});
		const el = document.querySelector("#jobListsIntersect");
		el && this.intersectionObserver.observe(el);
	},
	unmounted() {
		this.intersectionObserver?.disconnect();
	}
});
</script>

<style lang="scss" scoped>
.jobResultsView {
	display: flex;
	gap: 1rem;
	width: 100%;
}
</style>
