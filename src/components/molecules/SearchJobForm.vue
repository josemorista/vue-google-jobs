<template>
	<form action="">
		<TextField type="text" name="search" icon="search" label="Role" placeholder="Software Engineer" />
		<TextField type="text" name="search" label="In" placeholder="Los Angeles" />
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
			where: ""
		};
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