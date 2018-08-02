<template>
  <div>
    <form class="user-login-form" @submit.prevent="login">
      <table>
        <tr>
          <td><label>Username: </label></td>
          <td><input required v-model="username" type="text" placeholder="Username"/></td>
        </tr>
        <tr>
          <td><label>Password: </label></td>
          <td><input required v-model="password" type="password" placeholder="Password"/></td>
        </tr>
        <tr>
          <td><button type="submit">Log in</button></td>
          <td></td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'UserLoginFrom',
    data() {
      return {
        username: 'api',
        password: 'api',
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        this.$store.dispatch('user/USER_LOGIN', { username, password })
          .then(() => {
            this.$router.push('/')
          })
          .catch(function (err) {
            console.log(err);
          })
      }
    }
  }
</script>

<style scoped>
</style>
