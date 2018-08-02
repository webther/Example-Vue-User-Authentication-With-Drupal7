<template>
  <div id="app">
    <ul class="main-menu">
      <li v-if="isAuthenticated">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/user/login">Log in</router-link>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="/user/logout">Log out</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {},
  created: function () {
    Vue.axios.interceptors.response.use(undefined, function (err) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('user/USER_LOGOUT')
      }
    })

    this.$store.dispatch('user/USER_LOAD')
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'user/isAuthenticated'
    })
  }
}
</script>

<style>
  ul.main-menu {
    margin: 0;
    padding: 0;
  }

  ul.main-menu li {
    display: inline-block;
    margin: 0 15px 0 0;

  }
</style>
