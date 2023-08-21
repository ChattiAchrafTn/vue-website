<template>
  <v-app>
    <v-main>
      <NotificationPage/>
    </v-main>
  </v-app>
</template>

<script>
import NotificationPage from './components/NotificationsPage.vue'

export default {
  name: 'App',

  components: {
    NotificationPage,
  },

  data: () => ({
    //
  }),
}
</script>
