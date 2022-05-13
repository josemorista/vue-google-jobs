<template>
  <nav class="navbar">
    <div class="logo">
      <h1 data-test="enterprise-name">
        {{ enterprise }}
      </h1>
    </div>
    <ul class="nav-list">
      <li v-for="item of options" :key="item.title" class="nav-list-item" data-test="nav-list-item">
        <a class="nav-link" :href="item.path">{{ item.title }}</a>
      </li>
    </ul>
    <Button @click="login" data-test="navbar-signIn-button" variant="primary" button-text="Sign In"
      v-if="!isUserSigned" />
    <ProfilePicture @click="logout" data-test="navbar-profilePicture" v-else
      src="https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonVue from "../atoms/Button.vue";
import ProfilePicture from "../atoms/ProfilePicture.vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      options: [
        {
          path: "/",
          title: "Teams",
        },
        {
          path: "/",
          title: "Locations",
        },
        {
          path: "/",
          title: "Benefits",
        },
        {
          path: "/",
          title: "Jobs",
        },
        {
          path: "/",
          title: "Students"
        },
      ],
      enterprise: "Vue sample",
      isUserSigned: false
    };
  },
  methods: {
    login() {
      this.isUserSigned = true;
    },
    logout() {
      this.isUserSigned = false;
    }
  },
  components: {
    "Button": ButtonVue,
    ProfilePicture
  }
});
</script>


<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 2rem);
  overflow-x: auto;
  height: 4rem;
  margin: 0 1rem;

  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;

  border-bottom: 1px solid lightgray;

  div,
  ul {
    &.logo {
      h1 {
        color: darkgray;
      }
    }

    &.nav-list {
      display: flex;
      flex: 1;
      gap: 2rem;
    }
  }

  li {
    &.nav-list-item {
      cursor: pointer;
      border-bottom: 1px solid transparent;


      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }
}
</style>