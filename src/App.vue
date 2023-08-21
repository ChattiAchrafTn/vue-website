<template>
  <v-app>
    <v-main>
      <loginPage/>
    </v-main>
  </v-app>
</template>

<script>
import loginPage from './components/LoginPage.vue'

export default {
  name: 'App',

  components: {
    loginPage,
  },

  data: () => ({
    //
  }),
}
</script>
