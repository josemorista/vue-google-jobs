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
import JobFilter from "@/components/molecules/JobFilter.vue";
import JobList from "@/components/organisms/JobList.vue";
import { FetchHttpGetService } from "@/domain/shared/infra/fetch/adapters/FetchHttGetService";
import { HttpJsonRequest } from "@/domain/shared/entities/HttpJsonRequest";
import { Job } from "@/domain/modules/jobs/entities/Job";


const getService = new FetchHttpGetService();

export default defineComponent({
	name: "JobResultsView",
	components: {
		NavBar: NavBarVue,
		JobFilter,
		JobList
	},
	methods: {
		async fetchJobs() {
			const request = new HttpJsonRequest(`http://localhost:3000/jobs?_page=${this.page}&_limit=5`);
			const response = await getService.get<Array<Job>>(request);
			this.jobs = [...this.jobs, ...response.body];
			this.page++;
		}
	},
	data(): { jobs: Array<Job>, page: number, intersectionObserver: IntersectionObserver | null } {
		return {
			jobs: [],
			page: 0,
			intersectionObserver: null
		};
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
