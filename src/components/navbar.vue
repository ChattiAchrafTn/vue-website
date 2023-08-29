<template>
    <v-app-bar
      id="app-bar"
      absolute
      app
      color="transparent"
      flat
      height="37"
    >
      <v-btn
        class="mr-2"
        elevation="4"
        fab
        x-small
        @click="setDrawer(!drawer)"
      >
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style scoped>

</style>