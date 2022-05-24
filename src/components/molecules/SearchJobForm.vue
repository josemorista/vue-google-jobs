<template>
	<form @submit.prevent @submit="handleSubmit">
		<TextField type="text" :value="role" @onChange="role = $event" icon="search" label="Role"
			placeholder="Software Engineer" />
		<TextField type="text" :value="location" @onChange="location = $event" label="In" placeholder="Los Angeles" />
		<Button button-text="Search" type="submit" />
	</form>
</template>

<script lang="ts">
import TextField from "@/components/atoms/TextField.vue";
import { defineComponent } from "vue";
import Button from "../atoms/Button.vue";

export default defineComponent({
	name: "SearchJobForm",
	data() {
		return {
			role: "",
			location: ""
		};
	},
	methods: {
		handleSubmit() {
			const params: Record<string, string> = {};
			if (this.role) params.role = this.role;
			if (this.location) params.location = this.location;

			this.$router.push({
				name: "JobResults",
				query: params
			});
		}
	},
	components: {
		TextField,
		Button
	}
});
</script>

<style scoped lang="scss">
form {
	display: flex;
	align-items: flex-end;

	>button {
		height: 3.2rem;
	}
}
</style>