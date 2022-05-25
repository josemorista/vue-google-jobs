<template>
	<NavBar />
	<main class="jobResultsView">
		<JobFilter></JobFilter>
		<JobList :jobs="jobs" />
	</main>
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
	data(): { jobs: Array<Job> } {
		return {
			jobs: []
		};
	},
	async created() {
		const request = new HttpJsonRequest("http://localhost:3000/jobs");
		const response = await getService.get<Array<Job>>(request);
		this.jobs = response.body;
	}
});
</script>

<style lang="scss" scoped>
.jobResultsView {
	display: flex;
	gap: 1rem;
	width: 100%;
	height: calc(100vh - 8rem);
	overflow-y: hidden;
}
</style>
