<template>
	<aside>
		<section class="what-to-do">
			<header>
				<p>
					<strong>
						What do you want to do?
					</strong>
				</p>
				<p class="clear-filters">
					Clear filters
				</p>
			</header>
			<TextField value="" placeholder="Software Engineer, Design" />
		</section>

		<section class="accordion">
			<ul>
				<li>
					<div class="accordion-item-head" @click="changeCurrentOpen('locations')">
						<strong>Locations</strong>
						<icon type="chevron-down" />
					</div>
					<div v-if="currentOpenAccordion === 'locations'" class="accordion-item-collapse">
						<TextField value="" placeholder="San Francisco, London, Michigan" />
					</div>
				</li>
			</ul>
		</section>
	</aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextFieldVue from "../atoms/TextField.vue";

export default defineComponent({
	name: "JobFilter",
	components: {
		TextField: TextFieldVue
	},
	data() {
		return {
			currentOpenAccordion: "",
		};
	},
	methods: {
		changeCurrentOpen(value: string) {
			if (this.currentOpenAccordion === value) {
				this.currentOpenAccordion = "";
				return;
			}
			this.currentOpenAccordion = value;
		}
	}
});
</script>

<style lang="scss" scoped>
aside {
	width: 350px;

	padding: 2rem 1rem;

	border-right: 1px solid lightgray;

	p {
		&.clear-filters {
			color: blue;
			font-size: 12px;
			font-weight: bold;
		}
	}

	section {
		&.what-to-do {
			margin: 0 0 2rem 0;

			header {
				margin: 0 0 1rem 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}

		&.accordion {
			li {
				border-bottom: 1px solid lightgray;
			}

			div {
				&.accordion-item-head {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0 0 1rem 0;
				}

				&.accordion-item-collapse {
					overflow-y: hidden;
					margin: 0 0 1rem 0;
				}
			}
		}
	}
}
</style>