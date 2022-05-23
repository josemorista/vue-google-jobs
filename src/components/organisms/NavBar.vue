<template>
  <header :class="computedHeaderClass">
    <nav class="main-navbar">
      <div class="logo">
        <h1 data-test="enterprise-name">
          {{ enterprise }}
        </h1>
      </div>
      <ul class="nav-list">
        <li v-for="item of options" :key="item.title" class="nav-list-item" data-test="nav-list-item">
          <route-link class="nav-link" :to="{ name: item.path }">{{ item.title }}</route-link>
        </li>
      </ul>
      <Button class="btn-sign" @click="login" data-test="navbar-signIn-button" variant="primary" button-text="Sign In"
        v-if="!isUserSigned" />
      <ProfilePicture @click="logout" data-test="navbar-profilePicture" v-else />
    </nav>
    <SubNav v-if="isUserSigned" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonVue from "../atoms/Button.vue";
import ProfilePicture from "../atoms/ProfilePicture.vue";
import SubNav from "./SubNav.vue";


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
    ProfilePicture,
    SubNav
  },
  computed: {
    computedHeaderClass(): string {
      return this.isUserSigned ? "extended" : "";
    }
  }
});
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  height: 4rem;

  &.extended {
    height: 8rem;
  }

  nav {

    &.main-navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      overflow-x: auto;
      height: 4rem;
      padding: 0 2rem;

      display: flex;
      align-items: center;
      gap: 3rem;
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
          font-size: 0.8rem;
          border-bottom: 1px solid transparent;


          &:hover {
            border-bottom: 1px solid black;
          }
        }
      }

      button {
        min-width: 80px;
      }
    }
  }
}
</style>