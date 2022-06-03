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
				<li>
					<div class="accordion-item-head" @click="changeCurrentOpen('organizations')">
						<strong>Organizations</strong>
						<icon type="chevron-down" />
					</div>
					<div v-if="currentOpenAccordion === 'organizations'" class="accordion-item-collapse">
						<ul class="organizations-filter-section">
							<li v-for="organization of organizations" :key="organization">
								<input type="checkbox" :checked="filters.organizations.includes(organization)"
									@change="toggleOrganizationFilter(organization)" />
								<label :for="organization">{{ organization }}</label>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</section>
	</aside>
</template>

<script lang="ts">
import { Mutations } from "@/store/mutations";
import { defineComponent } from "vue";
import { mapGetters, mapMutations, mapState } from "vuex";
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
	computed: {
		...mapGetters(["organizations"]),
		...mapState(["filters"])
	},
	methods: {
		...mapMutations({
			addOrganizationFilter: Mutations.ADD_ORGANIZATION_FILTER,
			dropOrganizationFilter: Mutations.DROP_ORGANIZATION_FILTER
		}),
		changeCurrentOpen(value: string) {
			if (this.currentOpenAccordion === value) {
				this.currentOpenAccordion = "";
				return;
			}
			this.currentOpenAccordion = value;
		},
		toggleOrganizationFilter(filter: string) {
			if (this.filters.organizations.includes(filter)) {
				this.dropOrganizationFilter(filter);
				return;
			}
			this.addOrganizationFilter(filter);
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
			>ul>li {
				margin: 1rem 0;
				border-bottom: 1px solid lightgray;
			}

			div {
				&.accordion-item-head {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0 0 1rem 0;
					cursor: pointer;
				}

				&.accordion-item-collapse {
					overflow-y: hidden;
					margin: 0 0 1rem 0;
				}
			}
		}
	}

	ul {
		&.organizations-filter-section {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;

			>li {
				flex-basis: 50%;
				margin-bottom: 0.5rem;

				label {
					margin-left: 0.5rem;
				}
			}
		}
	}
}
</style>