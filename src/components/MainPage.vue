<template>
  <v-container fluid class="surface-variant" style=" width: 100%;background-color: #E7ECEF;">
    <v-app-bar
      style="background-color: #274C77;" elevate-on-scroll
      
    >

      <v-img 
        src="../assets/smartech_White.png"></v-img>
        <v-btn variant="text" color="#E7ECEF">Notifications</v-btn>
      <v-btn variant="text" color="#A3CEF1">Detection</v-btn>
      <v-btn variant="text" color="#E7ECEF">Train</v-btn>
      <v-btn variant="text" append-icon="mdi-menu-down" color="#E7ECEF">Dataset</v-btn>
      <v-btn variant="text" color="#E7ECEF">Models</v-btn>
      <v-btn variant="text" append-icon="mdi-menu-down" color="#E7ECEF">Users</v-btn>
      <v-btn variant="text" append-icon="mdi-menu-down" color="#E7ECEF">Classes</v-btn>
      <v-spacer></v-spacer>



      <v-btn variant="text" color="#E7ECEF" prepend-icon="mdi-menu">User Name</v-btn>
    </v-app-bar>
    <NotificationPage/>
  </v-container>
</template>
  
  <script>
  import NotificationPage from './NotificationsPage2.vue'
  
  
  export default {
    name: 'mainPage',
  
    components: {
      NotificationPage,
    },
  
    data: () => ({
      //
    }),
  }
  </script>