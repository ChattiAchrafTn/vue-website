<template>
    <v-row class="px-8">
        <v-col cols="6" >
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
                    <div>Camera 1</div>
                    </v-tooltip>
                </v-card>
            </v-row>
        </v-col>
        <v-col cols="6">
            <v-row class="py-1 pr-1">
                <v-card style="width:100%;">
                    <v-tooltip
                    location="top start"
                    origin="top start"
                    no-click-animation
                    >
                        <template v-slot:activator="{ props }">
                            <v-img v-bind="props" src="../../assets/live.png" ></v-img>
                        </template>
                    <div>Camera 2</div>
                    </v-tooltip>
                </v-card>
            </v-row>
        </v-col>
    </v-row>
    <v-row class="pb-3 px-8">
        <v-col cols="6">
            <v-row class="pr-1">
                <v-card style="width:100%;">
                    <v-tooltip
                    location="top start"
                    origin="top start"
                    no-click-animation
                    >
                        <template v-slot:activator="{ props }">
                            <v-img v-bind="props" src="../../assets/live.png" ></v-img>
                        </template>
                    <div>Camera 3</div>
                    </v-tooltip>
            </v-card>
            </v-row>
        </v-col>
        <v-col cols="6">
            <v-row  class="pr-1">
                <v-card style="width:100%;">
                    <v-tooltip
                    location="top start"
                    origin="top start"
                    no-click-animation
                    >
                        <template v-slot:activator="{ props }">
                            <v-img v-bind="props" src="../../assets/live.png" ></v-img>
                        </template>
                    <div>Camera 4</div>
                    </v-tooltip>
            </v-card>
            </v-row>
        </v-col>
    </v-row>
</template>
