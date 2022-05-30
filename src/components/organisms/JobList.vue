<template>
	<ol>
		<li class="job-result-item" v-for="job of jobs" :key="job.id">
			<router-link :to="`/jobs/results/${job.id}`">
				<header>
					<h2 class="job-name">
						{{ job.title }}
					</h2>
					<p class="enterprise">
						{{ job.organization }}
						<span>
							{{ job.locations?.join(",") }}
						</span>
					</p>
				</header>

				<article class="qualifications">
					<ul>
						<li v-for="qualification of [...job.minimumQualifications, ...job.preferredQualifications]"
							:key="qualification" class="qualification-item">
							{{ qualification }}
						</li>
					</ul>
				</article>
			</router-link>
		</li>
	</ol>
</template>

<script lang="ts">
import { Job } from "@/domain/modules/jobs/entities/Job";
import { defineComponent, PropType } from "vue";
export default defineComponent({
	name: "JobList",
	props: {
		jobs: {
			type: Object as PropType<Array<Job>>,
			required: true
		}
	}
});
</script>

<style lang="scss" scoped>
p,
h2 {
	&.job-name {
		font-weight: 400;
	}

	&.enterprise {
		font-size: 14px;
		font-weight: 400;

		>span {
			margin-left: 1rem;
		}
	}
}

ol,
ul {
	flex: 1;
	padding: 1rem 1rem 0 0;
	overflow-y: auto;

	li {
		&.job-result-item {
			cursor: pointer;
			box-shadow: 1px 0px 15px -3px rgba(5, 7, 10, 0.29);
			border-radius: 6px;
			width: 100%;

			padding: 1rem;

			&:not(:first-child) {
				margin-top: .8rem;
			}
		}

		&.qualification-item {
			list-style: disc;
			margin: 0 0 0 2rem;
		}

	}
}
</style>