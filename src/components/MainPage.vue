<template>
  <v-container fluid class="surface-variant" style=" width: 100%;background-color: #E7ECEF;">
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
      >
        <v-toolbar title="Settings">
          <v-btn variant="text" icon="mdi-window-close"  @click.stop="drawer = !drawer"></v-btn>
        </v-toolbar>

        <v-list-item
          lines="two"
          title="User Name"
          subtitle="Logged in"
        >  
        <template v-slot:prepend>        
          <v-icon 
            size="x-large" 
          >
            mdi-account-circle-outline
          </v-icon> 
        </template>
</v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <div class="text-body-1">Theme</div>
          <div class="text-caption">Customize your experience with light and dark themes.</div>
        </v-list-item>
        <v-list-item>
          <v-switch
            v-model="model"
            hide-details
            inset 
            color="#274C77"
            label="Dark Mode"
            true-icon="mdi-brightness-2"
            false-icon="mdi-brightness-5"
          ></v-switch>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item>
          <div class="text-body-1">Language</div>
          <div class="text-caption">Customize your experience by choosing the language</div>
        </v-list-item>
        <v-select
          class="ml-2 pl-2"
          :items="lang"
          variant="plain"
          density="compact"
        >
          <template #item="{ item }">
            <v-list-item>
              <v-list-item-avatar>
                <!-- Here you can place your icon for each item -->
                <v-icon>{{ getIconForLanguage(item.value) }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                {{ item.value }}
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-select>
        <v-divider></v-divider>

        <v-list-item>
          <div class="text-body-1">Detection Settings</div>
          <div class="text-caption">Customize hoose the model</div>
        </v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Settings" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      

        <v-divider></v-divider>
      <v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Log Out" value="logout"></v-list-item></v-list-item>
      </v-navigation-drawer>
    <v-app-bar
      style="background-color: #274C77;" elevate-on-scroll
      
    >

      <v-img 
        src="../assets/smartech_White.png"></v-img>
      <v-btn variant="text" color="#E7ECEF">Notifications</v-btn>
      <v-btn variant="text" color="#A3CEF1">Detection</v-btn>
      <v-btn variant="text" color="#E7ECEF">Train</v-btn>
      <v-btn variant="text" color="#E7ECEF">Dataset</v-btn>
      <v-btn variant="text" color="#E7ECEF">Models</v-btn>
      <v-btn variant="text" append-icon="mdi-menu-down" color="#E7ECEF">Users</v-btn>
      <v-btn variant="text" append-icon="mdi-menu-down" color="#E7ECEF">Classes</v-btn>
      <v-spacer></v-spacer>



      <v-btn variant="text" color="#E7ECEF" append-icon="mdi-menu" @click.stop="drawer = !drawer">User Name</v-btn>
    </v-app-bar>
    <NotificationPage/>
  </v-container>
</template>
  
  <script>
  import NotificationPage from './NotificationsPage2.vue'
  
  
  export default {   

    data () {
      return {
        lang: ['English', 'French'],
        model: true,
        drawer: null,
      }
    },  
    methods: {
    getIconForLanguage(language) {
        return language === 'English' ? 'mdi-translate' : 'mdi-menu-down';
      }
    },
    name: 'mainPage',
  
    components: {
      NotificationPage,
    },
  }
  </script>
