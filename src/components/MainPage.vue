<template>
  <v-container fluid class="surface-variant" style=" width: 100%;
    height: 100%;background-color: #E7ECEF;">
      
<navbarComp></navbarComp>
    <ClassesPage/>
  </v-container>
</template>
  
  <script>
  import navbarComp from './navbarComp.vue';
  import ClassesPage from './ClassesPage.vue'
  
  
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
    name: 'mainPage',
  
    components: {
      navbarComp,
      ClassesPage,
    },
  }
  </script>
