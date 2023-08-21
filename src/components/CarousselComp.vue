<template>
    <v-carousel :show-arrows="false"    progress="primary"
  light
    :continuous="false"
  >
    <v-carousel-item
      v-for="(slide, i) in title"
      :key="i"
    >
      <v-sheet
      
        color="#0C1821"
        height="100%"
            tile
      >
        <div class=" d-flex flex-column align-center " style="height: 100%;">
            <div style="height: 50%;width: 100%; background-color: #f0f0f0;margin-bottom: -60%;"></div>
            <v-img :src="require(`@/assets/${img[i]}`)" alt="pc pic" width="50%" style="margin-top: -5%;margin-bottom: 0%;">
                    </v-img>
            <h2 class="indigo--text" style="color: white;margin-top: -20%;">{{title[i] }}</h2>
            <p class="indigo--text" style="color: #F4F6F8;">{{content[i]}}</p>
            

        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </template>
  
  <script>
  export default {
    data() {
      return {
        img: [
            'lap1.png',
            'lap2.png',
            'lap3.png'
            
        ],
        title: [
          'Detect',
          'Train',
          'Configure',
        ],        
        content: [
          'Detect classes in your live feed',
          'Train your custom model on your own data to detect unlimited number of classes',
          'Delve into your settings to configure the to be detected classes',
        ],
      };
    },
  };
  </script>
  
  <style>


.v-btn .v-btn__content .v-icon {
        color: #CCC9DC;
    }
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
  </style>