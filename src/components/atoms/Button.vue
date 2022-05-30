<template>
	<button :class="{ [computedVariant]: true }">
		<span>
			{{ buttonText }}
		</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ButtonComponent",
	props: {
		buttonText: String,
		variant: {
			type: String,
			default: "primary",
			validator(value: string) {
				return ["primary", "secondary"].includes(value);
			}
		}
	},
	computed: {
		computedVariant(): string {
			return this.variant || "primary";
		}
	}
});
</script>

<style scoped lang="scss">
button {
	padding: 0.5rem 1rem;
	outline: none;
	box-shadow: none;
	border: 1px solid transparent;
	border-radius: 4px;
	font-weight: bold;

	&:hover {
		filter: brightness(0.8);
	}

	&.primary {
		background-color: blue;
		color: white;
	}

	&.secondary {
		background-color: transparent;
		border-color: blue;
		color: blue;
	}
}
</style>