<template>
    <v-row class="pb-3 px-8">
        <v-col cols="12" >
            <v-row class="pr-1 pt-1">
                <v-card style="width:100%;" >
                    <v-tooltip
                    location="top start"
                    origin="top start"
                    no-click-animation
                    >
                        <template v-slot:activator="{ props }">
                            <v-img v-bind="props" src="../../assets/live.png" ></v-img>
                        </template>
                    <div>{{ selectedCamera.cameraName }}</div>
                    </v-tooltip>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: {
        selectedCamera: Object, // Define the prop to receive the selected camera
    },
};
</script>