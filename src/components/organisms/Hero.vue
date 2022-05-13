<template>
	<main>
		<div class="hero">
			<div class="content">
				<h1 class="heroTitle">Create</h1>
				<h1 class="heroSubtitle">for everyone</h1>
				<h2>Find your next job in Vue Sample</h2>
			</div>
			<aside class="heroImage">
			</aside>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "HeroComponent",
	beforeCreate() {
		console.log("Before creating");
	},
	created() {
		console.log("Created");
	},
	beforeMount() {
		console.log("Before mount");
	},
	mounted() {
		console.log("Mounted");
	},
	beforeUpdate() {
		console.log("Before update");
	},
	updated() {
		console.log("Updated");
	},
	beforeUnmount() {
		console.log("Will unmount");
	},
	unmounted() {
		console.log("Unmounted");
	}
});
</script>

<style lang="scss" scoped>
main {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 3rem 0;

	.hero {
		width: 100%;
		max-width: 1200px;
		display: flex;
		height: 40vh;

		align-items: center;
		justify-content: center;

		div {
			&.content {
				flex: 1;
				padding: 0 1rem;

				h1 {
					font-size: 88px;
					line-height: 88px;

					&.heroTitle {
						color: blue;
					}
				}

				h2 {
					margin-top: 2rem;
					font-size: 28px;
					font-weight: 400;
				}
			}
		}

		aside {
			flex: 1;
			height: 100%;
			background: url('@/assets/hero.png');
			background-position: center center;
			background-size: contain;
			background-repeat: no-repeat;
		}
	}
}
</style>