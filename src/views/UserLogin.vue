<template>
  <div class="user-login">
    <h2>Log in</h2>
    <user-login-form></user-login-form>
  </div>
</template>

<script>
  import UserLoginForm from '@/components/user/UserLoginForm'

  export default {
    name: 'UserLogin',
    components: {
      UserLoginForm
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
</style>
