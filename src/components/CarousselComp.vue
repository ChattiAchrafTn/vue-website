<template>
    <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  </template>
  
  <script>
  import VueCarousel from 'vue-carousel';
  export default {
    components: {
    VueCarousel,
  },
    data() {
      return {
        data: [
          '<h2 class="indigo--text" style="color: white;margin-top: 5%;margin-right: 50%">Detect</h2><p class="indigo--text" style="color: #F4F6F8;margin-top: 3%;margin-right: 30%">Detect classes in your live feed</p>',
          '<h2 class="indigo--text" style="color: white;margin-top: 5%;margin-right: 50%">Train</h2><p class="indigo--text" style="color: #F4F6F8;margin-top: 3%;margin-right: 30%">Train your custom model on your own data to detect unlimited number of classes</p>',
          '<h2 class="indigo--text" style="color: white;margin-top: 5%;margin-right: 50%">Configure</h2><p class="indigo--text" style="color: #F4F6F8;margin-top: 3%;margin-right: 30%">Delve into your settings to configure the to be detected classes</p>',
        ],
      };
    },
  };
  </script>
  
  <style>
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