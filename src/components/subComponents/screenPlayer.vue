<template>
    <singleScreen v-if="selectedView === 'single'"></singleScreen>
    <tripleScreen v-if="selectedView === 'triple'"></tripleScreen>
    <quadScreen v-if="selectedView === 'quad'"></quadScreen>
    <multiScreen v-if="selectedView === 'multi'"></multiScreen>
    <v-row justify="center">            
        <v-card  class="px-6 rounded-pill" style="background-color: white; height: 100%;" min-width="25%"  min-height="100%" 
        >
            <v-row justify="center">
                <v-hover v-slot="{ isHovering, props }">
                    <v-col  v-bind="props" cols="4" class="py-5" @click="selectView('triple')" :class="{ 'col-hover': isHovering }">
                        <div class="d-flex justify-center">
                            <v-img  max-width="80%" src="../../assets/3.svg" />
                        </div> 
                    </v-col>
                </v-hover>
                <v-divider class="border-opacity-50" vertical></v-divider>
                <v-hover v-slot="{ isHovering, props }">
                    <v-col  v-bind="props" cols="4" class="py-5" @click="selectView('quad')" :class="{ 'col-hover': isHovering }">
                        <div class="d-flex justify-center">
                            <v-img  max-width="80%" src="../../assets/4.svg" />
                        </div> 
                    </v-col>
                </v-hover>
                <v-divider class="border-opacity-50" vertical></v-divider>
                <v-hover v-slot="{ isHovering, props }">
                    <v-col  v-bind="props" cols="4" class="py-5" @click="selectView('multi')" :class="{ 'col-hover': isHovering }">
                        <div class="d-flex justify-center">
                            <v-img  max-width="80%" src="../../assets/6.svg" />
                        </div> 
                    </v-col>
                </v-hover>
            </v-row>
        </v-card>
    </v-row>
</template>
<script>
import tripleScreen from '../screens/TripleScreen.vue'
import quadScreen from '../screens/QuadScreen.vue'
import multiScreen from '../screens/MultiScreen.vue'

export default {
data() {
    return {
      selectedView: 'multi',
        toggle_exclusive: 2,
        data: {
            cameras:[
                {
                cameraId: "0",
                cameraFeed: "dadaadzadaadad",
                cameraName: "Camera Main",
                },
                {
                cameraId: "1",
                cameraFeed: "dadaadzadaadad",
                cameraName: "Camera 1",
                },
                {
                cameraId: "2",
                cameraFeed: "dadaadzadaadad",
                cameraName: "Camera 2",
                },
                {
                cameraId: "3",
                cameraFeed: "dadaadzadaadad",
                cameraName: "Camera 3",
                },
                {
                cameraId: "4",
                cameraFeed: "dadaadzadaadad",
                cameraName: "Camera 4",
                },
                {
                cameraId: "5",
                cameraFeed: "dadaadzadaadad",
                cameraName: "Camera 5",
                },
            ],
        },
      };
  },
  components:{
    tripleScreen,
    quadScreen,
    multiScreen
  },
  methods: {
    selectView(viewName) {
      // Update the selected view when an option is clicked
      this.selectedView = viewName;
    },
      
    },
};
</script>
<style scoped>
.col-normal {
  background-color: transparent; /* Set the normal background color */
  transition: background-color 0.3s; /* Add a transition for smooth color change */
}

.col-hover {
  background-color: lightgray; /* Set the hover background color */
}
</style>
