<template>
  <div class="dashboard-greeting">
    Welcome [{{ user.name }}]!
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'DashboardGreeting',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    }
  }
</script>

<style scoped>
</style>
