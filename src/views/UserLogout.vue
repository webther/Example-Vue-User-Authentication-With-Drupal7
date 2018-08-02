<template>
  <div class="user-login">
    <h2>Logging out, please wait...</h2>
  </div>
</template>

<script>
  export default {
    name: 'UserLogout',
    components: {},
    data() {
      return {}
    },
    created() {
      this.$store.dispatch('user/USER_LOGOUT')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
</script>

<style scoped>
</style>
