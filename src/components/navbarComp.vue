<template>
  
  <v-navigation-drawer
        width="20%"
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
        
      <v-select :items="lang" item-title="name" item-value="id">
          <template #item="{ item, props }">
              <v-list-item v-bind="props">
                  <template #title>
                      <span>
                        <v-row>
                          <v-col cols="2">
                            <v-img v-if="item.raw.name=='English'" src="../assets/lang/gb.png" /> 
                            <v-img v-else src="../assets/lang/fr.png" />
                          </v-col>
                          <v-col cols="7">
                           {{item.raw.name}}

                          </v-col>
                        </v-row>
                      </span>
                  </template>
              </v-list-item>
          </template>
      </v-select>
        <v-divider></v-divider>

        <v-list-item>
          <div class="text-body-1">Detection Settings</div>
          <div class="text-caption">Customize diffrent settings about the application and the signed in user</div>
        </v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Settings" value="settings">

          </v-list-item>
      

        <v-divider></v-divider>
      
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Log Out" value="logout"></v-list-item>
      
      </v-navigation-drawer>
    <v-app-bar
    
    id="app-bar"
      flat
      style="background-color: #274C77;" elevate-on-scroll      
    >

      <v-img 
        src="../assets/smartech_White.png"></v-img>
      <v-btn to="/" variant="text" color="#E7ECEF">Notifications</v-btn>
      <v-btn variant="text" color="#E7ECEF">Detection</v-btn>
      <v-btn variant="text" color="#E7ECEF">Train</v-btn>
      <v-btn to="/Dataset" color="#E7ECEF">Dataset</v-btn>
      <v-btn variant="text" color="#E7ECEF">Models</v-btn>
      <v-btn variant="text" color="#E7ECEF">Users</v-btn>
      <v-btn to="/Classes" color="#E7ECEF">Classes</v-btn>
      <v-spacer></v-spacer>

      <v-btn variant="text" color="#E7ECEF" append-icon="mdi-menu" @click.stop="drawer = !drawer">User Name</v-btn>
    </v-app-bar>
</template>
<script>

export default {   

data () {
  return {
selected: 'English',
    lang: [            {id:0, image:"../assets/gb.png", name:"English"},
        {id:1, image:"../assets/lang/fr.png", name:"French"},],
    model: true,
    drawer: null,
  }
},  
methods: {
getIconForLanguage(language) {
    return language === 'English' ? 'mdi-translate' : 'mdi-menu-down';
  }
},
  }
</script>
<style scoped>

</style>