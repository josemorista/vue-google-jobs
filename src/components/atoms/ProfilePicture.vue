<template>
	<img :src="src || require('@/assets/default-avatar.jpg')" alt="profile picture">
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ProfilePicture",
	props: {
		src: String
	}
})
</script>

<style lang="scss" scoped>
img {
	height: 3rem;
	width: 3rem;
	object-fit: cover;
	border-radius: 50%;
	border: 1px solid darkgray;
}
</style>