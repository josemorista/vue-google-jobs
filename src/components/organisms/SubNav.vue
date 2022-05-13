<template>
	<nav>
		<section class="search">
			<icon type="search"></icon>
		</section>
		<section v-if="!hideJobsMatched" class="jobs-matched" data-test="jobs-matched">
			<p>
				8 jobs matched
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
	data() {
		return {
			hideJobsMatched: false
		};
	}
});
</script>

<style lang="scss" scoped>
nav {

	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: auto;
	gap: 1rem;
	padding: 0 1rem;
	height: 5rem;
	border-bottom: 1px solid darkgray;

	section {
		&.search {}

		&.jobs-matched {}

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