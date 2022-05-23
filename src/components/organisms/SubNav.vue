<template>
	<nav>
		<section v-if="!hideJobsMatched" class="search">
			<icon type="search"></icon>
		</section>
		<section v-if="!hideJobsMatched" class="jobs-matched" data-test="jobs-matched">
			<p>
				<span>8</span> jobs matched
			</p>
		</section>
		<section class="options">
			<a href="#">Saved jobs</a>
			<a href="#">Job alerts</a>
		</section>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SubNav",
	computed: {
		hideJobsMatched() {
			return this.$route.name === "job-results";
		}
	}
});
</script>

<style lang="scss" scoped>
nav {
	position: fixed;
	top: 4rem;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: auto;
	gap: 1rem;
	padding: 0 2rem;
	height: 4rem;
	border-bottom: 1px solid lightgray;

	section {
		&.search {}

		&.jobs-matched {
			p {
				span {
					color: green;
				}
			}
		}

		&.options {
			display: flex;
			flex: 1;
			justify-content: flex-end;
			gap: 1rem;

			a {
				border-bottom: 1px solid transparent;

				&:hover {
					border-bottom: 1px solid black;
				}
			}
		}
	}
}
</style>