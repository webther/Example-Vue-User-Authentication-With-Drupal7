<template>
  <div class="dashboard-index">
    <h2>Dashboard</h2>
    <dashboard-greeting></dashboard-greeting>
  </div>
</template>

<script>
  import DashboardGreeting from '@/components/dashboard/DashboardGreeting'

  export default {
    name: 'DashboardIndex',
    components: {
      DashboardGreeting
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
</style>
