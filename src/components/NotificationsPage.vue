<template >
    <v-container fluid class="surface-variant" style=" width: 90%;">
        <v-row>
            <h2 class="centered-heading">Notification List</h2>
        </v-row>
        <v-row no-gutters>
            <v-col v-for="(item, index) in data.datasets" :key="index" cols="4">         
                <v-sheet class="pa-6 ma-6" style="background-color: white; 
    border: 2px solid black; " >
                    <v-row style="padding-top: 5%;padding-bottom: 5%;">
                        <v-img :src="item.image" alt="pc pic" width="40%"></v-img>
                    </v-row>
                    <v-row justify="center" style="padding-bottom: 5%;">
                        <v-icon icon="mdi-alert-outline" />
                        <p class="font-weight-medium"> Detection of {{ item.classes }} on Camera {{ item.camera }} </p>
                    </v-row>
                    <v-row justify="center" style="padding-bottom: 5%;">
                        
                        <v-icon icon="mdi-calendar-month" />
                        <p class="font-weight-medium">  {{ item.date }}</p>
                    </v-row>
                    <v-row justify="center">
                        <v-btn prepend-icon="mdi-close-circle" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 50%;">
                            False Detection
                        </v-btn>
                        <v-btn prepend-icon="mdi-check-circle" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 50%;">
                            Valid Detection
                        </v-btn>  
                    </v-row>
                    <v-row justify="center" style="padding-bottom: 5%;">
                        <v-btn prepend-icon="mdi-delete" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 35%;">
                            Ignore
                        </v-btn>                
                        <v-btn prepend-icon="mdi-download" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 35%;">
                            Download
                        </v-btn>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col v-for="(item, index) in data.datasets" :key="index" cols="6">         
                <v-sheet class="pa-6 ma-6" style="background-color: white; border: 2px solid black; ">
                    <v-row>
                        <v-col style="padding-top: 5%;padding-right: 0%;" cols="4">
                            <v-img :src="item.image" alt="pc pic" width="100%"></v-img>
                        </v-col>
                        
                        <v-col style="padding-top: 2%; padding-left: 0%;">
                            <v-row justify="center" style="padding-bottom: 0%;">
                                <v-icon icon="mdi-alert-outline" />
                                <p class="font-weight-medium"> Detection of {{ item.classes }} on Camera {{ item.camera }} </p>
                            </v-row>
                            <v-row justify="center" style="padding-bottom: 5%;">
                                
                                <v-icon icon="mdi-calendar-month" />
                                <p class="font-weight-medium">  {{ item.date }}</p>
                            </v-row>
                            <v-row justify="center">
                            <v-btn prepend-icon="mdi-close-circle" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 80%;">
                                False Detection
                            </v-btn>
                            <v-btn prepend-icon="mdi-check-circle" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 80%;">
                                Valid Detection
                            </v-btn>  
                        </v-row>
                        <v-row justify="center" style="padding-bottom: 3%;">
                            <v-btn prepend-icon="mdi-delete" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 45%;">
                                Ignore
                            </v-btn>                
                            <v-btn prepend-icon="mdi-download" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 45%;">
                                Download
                            </v-btn>
                        </v-row>
                        </v-col>
                    </v-row>
                        
                    
                </v-sheet>
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>
export default {
  data() {
    return {
        data: {
            datasets: [
                {
                    image: "/static/example.jpg",
                    camera: '01',
                    classes: 'Oil',
                    date: '20/7/2023 18:05',
                    model: 'model01'
                },
                {
                    image: 'static/example.jpg',
                    camera: '02',
                    classes: 'Oil',
                    date: '20/7/2023 19:05',
                    model: 'model01'
                },
                {
                    image: 'static/example.jpg',
                    camera: '01',
                    classes: 'Bottle',
                    date: '10/7/2023 08:05',
                    model: 'model02'
                },
                {
                    image: 'static/example.jpg',
                    camera: '03',
                    classes: 'Oil',
                    date: '25/7/2023 18:50',
                    model: 'model01'
                },
            ]
        },
    };
  },
};
</script>
<style scoped>

.containermain {
        text-align: center;
          align-items: center;
          margin-bottom: 2%;
      }
      .centered-heading {
          margin-top: 2%;
          margin-bottom: 2%;
          display: inline-block;
      }
      .container {
          display: flex;
          align-items: center;
          text-align: center;
          margin-bottom: 2%;
      }
      .text {
          flex-grow: 1;
      }
      .image {
          max-height: 100px;
          cursor: pointer;
          transition: max-height 0.3s;
      }
      .image.expanded {
          max-height: none;
      }
</style>