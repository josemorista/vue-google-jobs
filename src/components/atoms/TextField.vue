<template>
	<div class="formContainer">
		<label :class="hasIcon" v-if="!!label" :for="id">{{ label }}</label>
		<div class="inputContainer">
			<icon v-if="!!icon" :type="icon"></icon>
			<input :value="value" @input="handleChange" :type="type" :name="name" :id="id" :placeholder="placeholder">
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "TextField",
	props: {
		id: String,
		name: String,
		type: String,
		label: String,
		icon: String,
		placeholder: String,
		value: {
			type: String,
			default: ""
		}
	},
	methods: {
		handleChange(event: any) {
			this.$emit("onChange", event.target.value);
		}
	},
	computed: {
		hasIcon() {
			return this.icon ? "withIcon" : "";
		}
	}
});
</script>

<style scoped lang="scss">
.formContainer {
	label {
		color: black;
		font-size: 1rem;
		display: block;
		margin: 0 0 .5rem 1rem;


		&.withIcon {
			margin: 0 0 .5rem 3.2rem;
		}
	}

	.inputContainer {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 3.2rem;
		padding: 0 1rem;

		border: 1px solid darkgray;

		input {
			border: none;
			font-size: 1rem;
			width: 100%;
			height: 100%;
			border-bottom: 1px solid transparent;


			&::placeholder {
				font-size: inherit;
			}

			&:focus {
				border-bottom: 1px solid blue;
			}
		}
	}
}
</style>