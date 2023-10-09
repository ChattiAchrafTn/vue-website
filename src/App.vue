<template>
  <v-app>
  <v-container fluid class="surface-variant" style=" width: 100%;
    height: 100%;background-color: #E7ECEF;">
      
    <navbarComp></navbarComp>
    <router-view></router-view> 
  </v-container>
</v-app>
</template>
  
  <script>
import navbarComp from './components/navbarComp.vue';
  
  
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
  
    components: {
      navbarComp,
    },
  name: 'App',

  
}
</script>
