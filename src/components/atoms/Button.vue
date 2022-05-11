<template>
	<button :class="variant">
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
		variant: String
	}
})
</script>

<style scoped lang="scss">
button {
	padding: 0.8rem 1rem;
	outline: none;
	box-shadow: none;
	border: 1px solid transparent;
	font-weight: bold;

	&.primary {
		background-color: blue;
		border-radius: 4px;
		color: white;

		&:hover {
			filter: brightness(0.9);
		}
	}
}
</style>