<template>
    <v-row justify="space-between" class="mt-2"> 
        <v-col cols="6" class="ml-12 mt-12">    
            <p class="text-h6">Detection</p>
        </v-col>
    </v-row>
    <v-divider :thickness="2" color="black"></v-divider>
    <v-row  class="mt-3" justify="center">
        <v-col cols="3"> 
            <v-row>
                <v-card class="px-6 ml-5 my-3" style="background-color: white; height: 100%;" min-width="90%" >
                    <v-row class="pt-3">
                        <h2> Overview </h2>
                    </v-row>
                    <v-row class="pa-3 pb-0">
                        <v-col>
                        <v-hover v-slot="{ isHovering, props }">
                            <v-row class="pl-1" v-bind="props" :class="{ 'col-hover': isHovering }"  @click="selectView('multi')">
                                <v-icon size="small" icon="mdi-cctv"></v-icon> <p class="ml-1"> Multi Cameras View</p>
                            </v-row>        
                        </v-hover>            
                        </v-col>
                    </v-row>
                    <v-row class="pa-3">
                        <v-col>
                            <v-row class="pl-1 pb-2">
                                <v-icon size="small" icon="mdi-cctv"></v-icon> <p class="ml-1"> Uni Camera View</p>
                            </v-row>
                            <v-row class="pl-4 pt-1" v-for="(item, index) in data.cameras" :key="index"  @click="selectCamera(item)" >
                                
                                <v-hover v-slot="{ isHovering, props }" >
                                        <v-icon size="x-small" icon="mdi-circle-slice-8"></v-icon> 
                                        <p v-bind="props" :class="{ 'col-hover': isHovering }" class="text-caption ml-1">{{ item.cameraName }}</p>      
                                </v-hover>   
                            </v-row>           
                        </v-col>
                    </v-row>
                    <v-row class="pa-3">
                        <v-col>
                            <v-row class="pl-1">
                                <v-icon></v-icon>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </v-col>
        <v-col cols="8">
            <screenPlayer v-if="selectedView === 'multi'"></screenPlayer>
            <SingleScreen v-if="selectedView === 'single'" :selectedCamera="selectedCamera"></SingleScreen>
        </v-col>
        <v-col cols="1">
        </v-col>
    </v-row>

</template>
<script>
import screenPlayer from './subComponents/screenPlayer.vue'
import SingleScreen from './screens/SingleScreen.vue'
export default {
data() {
    return {
      selectedView: 'multi',
        selectedCamera: null, 
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
    screenPlayer,
    SingleScreen,
  },
  methods: {
    selectView(viewName) {
      // Update the selected view when an option is clicked
      this.selectedView = viewName;
    },
    selectCamera(camera) {
        // Update the selected camera and switch to the "single" view
        this.selectedCamera = camera;
        this.selectedView = 'single';
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