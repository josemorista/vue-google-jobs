<template>
	<nav>
		<section class="search">
			<img src="@/assets/zoom.png" alt="Search icon">
		</section>
		<section class="jobs-matched">
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

<style lang="scss" scoped>
nav {

	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: auto;
	gap: 1rem;
	padding: 0 2rem;
	height: 5rem;
	border-bottom: 1px solid darkgray;

	section {
		&.search {
			img {
				height: 1.8rem;
			}
		}

		&.jobs-matched {
			flex: 1;
		}

		&.options {
			display: flex;
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