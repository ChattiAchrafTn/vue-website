<template>
    <v-row justify="space-between" class="mt-2"> 
        <v-col cols="6" class="ml-12 mt-12">    
            <p class="text-h6">Dataset Name</p>
            <p class="caption ma-1 ml-10">Last updated on 01/06/23 at 11:25</p>
        </v-col>
    </v-row>
    <v-divider :thickness="2" color="black"></v-divider>
    <v-row>
        <v-col cols="3">
            <v-card class="pa-6 ma-6" style="background-color: white; height: 100%;" min-width="90%" >
                    <v-row class="pt-3">
                        <h2> Overview </h2>
                    </v-row>
                    <v-row class="pa-3">
                        <v-col>
                            <v-row class="pl-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Database :</p>
                            </v-row>
                            <v-row class="pl-1" >
                                <p class="ml-8"> Oil Detection</p>
                            </v-row>
                            
                            <v-row class="pl-1 pt-4" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Classes </p>
                            </v-row>
                            <v-row class="pl-4 pt-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Train :  80%</p>
                            </v-row>
                            <v-row class="pl-4 pt-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Valid :  10%</p>
                            </v-row>
                            <v-row class="pl-4 pt-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Test :  10%</p>
                            </v-row>

                            <v-row class="pl-1 pt-4" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> 2525 Images </p>
                            </v-row>
                            <v-row class="pl-4 pt-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Train :  80%</p>
                            </v-row>
                            <v-row class="pl-4 pt-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Valid :  10%</p>
                            </v-row>
                            <v-row class="pl-4 pt-1" >
                                <v-icon size="small" icon="mdi-database"></v-icon> <p class="ml-1"> Test :  10%</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
        </v-col>
        <v-col cols="9">
            <v-row no-gutters>
                <v-col cols="7">
                    <v-card class="px-6 mx-2 pt-6 mt-6" style="background-color: white; height: 100%;" min-width="90%" >
                        <v-row>
                            <p> Train Model : </p>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field label="Epochs"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Batch size"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field label="Patience"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Learning rate final"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <p> Data Augmentation : </p>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field label="Dataset"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="Select Augmentation methods"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field label="First Name"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-btn>Train</v-btn>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="5">
                    <v-card loading class="pl-6 mr-6 pt-6 mt-6" style="background-color: white; height: 100%;" min-width="90%" >
                        <v-row>
                            Training : 
                        </v-row>
                        <v-row>
                            <v-col cols="3">Epoch: 2</v-col>
                            <v-col cols="4">mAP50: 12</v-col>
                            <v-col cols="5">mAP50-95: 24</v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>