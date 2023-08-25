<template >
    <v-container fluid class="surface-variant" style=" width: 100%;background-color: #E7ECEF;">
        <v-row justify="center">
            <h1 class="ma-3">Notification List</h1>
        </v-row>
        <v-row no-gutters >
            <v-col  cols="3">    <!-- 3*4=12    -->
                <v-card class="pa-6 ma-6" style="background-color: white; height: 100%;" >
                    <v-row style="padding-top: 5%;">
                        <h2> Camera </h2>    
                    </v-row>
                    <v-row justify="center" style="padding-bottom: 5%;" >
                        <v-col v-for="(item, index) in uniqueCameras" :key="index" cols="6" style=" margin-top: -3%;">
                            <label class="check" >
                                <input type="checkbox" v-model="selectedCameras" :value="item" :label="item" :checked="selectedCameras.includes(item)">
                                <span> Camera {{ item }} </span>
                            </label>
                        </v-col>

                    </v-row>
                    <v-row style="padding-top: 5%;">
                        <h2> Class </h2>  
                    </v-row>
                    <v-row justify="center" style="padding-bottom: 5%;">
                        <v-col v-for="(item, index) in uniqueClasses" :key="index" cols="4" style="margin-top: -3%;">
                            <label class="check" >
                                <input type="checkbox" v-model="selectedClasses" :value="item" :label="item" :checked="selectedClasses.includes(item)">
                                <span> {{ item }} </span>
                            </label>
                        </v-col>
                    </v-row>
                    <v-row style="padding-top: 5%;">
                        <h2> Model </h2>  
                    </v-row>
                    <v-row  no-gutters  >
                        <v-col>
                            <v-row no-gutters v-for="(item, index) in uniqueModels" :key="index" style="margin-bottom: -16%;">
                                <v-checkbox v-model="selectedModels" :value="item" :label="item" :checked="selectedModels.includes(item)"></v-checkbox>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row style="padding-top: 5%;">
                        <h2> Date </h2>  
                    </v-row>
                    <v-row style="padding-left: 10%;">
                        <label for="start">Filter from: </label>
                        <input type="date" id="start" name="filter-start" value="2023-08-22" min="2023-01-01" max="2023-12-31">
                    </v-row>
                    <v-row style="padding-left: 10%;">
                        <label for="start">Filter until: </label>
                        <input type="date" id="end" name="filter-end" value="2023-08-22" min="2023-01-01" max="2023-12-31">
                    </v-row>
                    <v-row  style="padding-top: 5%;">
                        <v-col cols="6">
                            <v-btn  @click="applyFilters" type="submit" class="btn rounded-pill" style="width: 100%;">
                                Apply
                            </v-btn>  
                        </v-col>
                        <v-col cols="6">
                            <div
                                style="padding-top: 5%;">
                                <a
                                href="#"
                                class="text-decoration-none"
                                @click="clearAllFilters"
                                ><v-icon aria-hidden="false">mdi-close</v-icon>Clear all
                            </a>
                            </div>

                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="9" class="mt-3">
                <v-row style="margin-right: 2%;">
                    <v-col v-for="(item, index) in filteredDatasets" :key="index" cols="3">    <!-- 3*4=12    -->
    <v-hover v-slot="{ isHovering, props }">
                        <v-card class="pa-5 ma-3" style="background-color: white; border: 1px  grey; width: 100%; height: 100%;"         
                        v-bind="props"
                            :elevation="isHovering ? 24 : 6"
                            @click="openImageDialog(item)" 
                            >
                            <v-row style="padding-top: 5%;margin-bottom: 5%;">
                                
                                <v-img 
              class="align-end" cover
                        :src="item.image" alt="pc pic" width="40%"></v-img>
                            </v-row>
                            <v-row justify="center" style="padding-bottom: 5%;">

                                <p class="font-weight-medium"> Detection on Camera {{ item.camera }} </p>
                                
                            </v-row>

                        </v-card>
    </v-hover>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
        <v-row justify="center">
            <v-dialog 
            v-if="selectedImage"
                v-model="imagedialog"
                width="80%"
                
                >

                <v-card height="80vh">
                    <v-row>
                        <v-col no-gutters cols="3" style="border-right: 2px solid black;" >

                            <v-row justify="center" style="border-bottom: 2px solid black;padding-top:10%;padding-bottom: 5%;">
                                <h2 class="font-weight-medium"> Notification </h2>
                            </v-row>
                            <v-row class="mt-8 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Detected by : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-3 ml-10">
                                    <v-icon icon="mdi-cctv" /> Camera {{ selectedImage.camera}}
                            </v-row>
                            <v-row class="mt-8 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Detected on : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-10" no-gutters >
                                <v-col cols="6" class="ml-10">
                                    <v-icon icon="mdi-calendar-month" /> {{selectedImage.date}}
                                </v-col>
                                <v-col cols="4">
                                    <v-icon icon="mdi-clock-outline" /> {{selectedImage.time}}  
                                </v-col>
                            </v-row>
                            <v-row class="mt-8 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Classes detected : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-10" no-gutters >
                                <v-col cols="6" class="ml-10">
                                    <v-icon icon="mdi-circle-slice-8" /> {{selectedImage.classes}}
                                </v-col>
                            </v-row>
                            <v-row class="mt-8 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Model used : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-3 ml-10">
                                    <v-icon icon="mdi-file-cog-outline" /> {{selectedImage.model}}
                            </v-row>

                            <v-row justify="center">
                                <v-btn prepend-icon="mdi-close-circle" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 80%;">
                                    False Detection
                                </v-btn>
                                <v-btn prepend-icon="mdi-check-circle" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 80%;">
                                    Valid Detection
                                </v-btn>  
                            </v-row>
                            <v-row justify="center" >
                                <v-btn prepend-icon="mdi-delete" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 45%;">
                                    Ignore
                                </v-btn>  </v-row>
                            <v-row justify="center" >              
                                <v-btn prepend-icon="mdi-download" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 45%;">
                                    Download
                                </v-btn>
                            </v-row>
                        </v-col>
                        <v-col cols="9">
                            <v-img style="padding-left: 20%;padding-top: 20%;"
                                src="static/example.jpg" alt="pc pic" width="90%">
                            </v-img>
                        </v-col>
                    </v-row>

                    


                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>
<script>
export default {
  data() {
    return {
        filteredDatasets: [],
        data: {
            classesColor:[
                {
                    classId: "0",
                    className: "Oil",
                    classColor: "Blue",
                },
                {
                    classId: "1",
                    className: "Bottle",
                    classColor: "Grey",
                },
                {
                    classId: "2",
                    className: "Water",
                    classColor: "lightblue",
                }
            ],
            datasets: [
                {
                    image: "/static/example.jpg",
                    camera: '01',
                    classes: 'Oil',
                    date: '20/7/2023', 
                    time: '18:05',
                    model: 'model01'
                },
                {
                    image: 'static/example.jpg',
                    camera: '02',
                    classes: 'Oil',
                    date: '20/7/2023', 
                    time: '19:05',
                    model: 'model01'
                },
                {
                    image: "/static/example.jpg",
                    camera: '01',
                    classes: 'Oil',
                    date: '20/7/2023', 
                    time: '18:05',
                    model: 'model01'
                },
                {
                    image: 'static/example.jpg',
                    camera: '02',
                    classes: 'Oil',
                    date: '20/7/2023', 
                    time: '19:05',
                    model: 'model01'
                },
                {
                    image: 'static/example.jpg',
                    camera: '01',
                    classes: 'Bottle',
                    date: '10/7/2023', 
                    time: '08:05',
                    model: 'model02'
                },
                {
                    image: "/static/example.jpg",
                    camera: '01',
                    classes: 'water',
                    date: '20/7/2023', 
                    time: '18:05',
                    model: 'model01'
                },
                {
                    image: 'static/example.jpg',
                    camera: '02',
                    classes: 'Oil',
                    date: '20/7/2023', 
                    time: '19:05',
                    model: 'model03'
                },
                {
                    image: 'static/example.jpg',
                    camera: '04',
                    classes: 'Bottle',
                    date: '10/7/2023', 
                    time: '08:05',
                    model: 'model02'
                },
                {
                    image: 'static/example.jpg',
                    camera: '03',
                    classes: 'Oil',
                    date: '25/7/2023', 
                    time: '18:50',
                    model: 'model01'
                },
            ]
        },
        selectedImage:undefined,
        imagedialog: false,
        selectedCameras: [],
        selectedModels: [],
        selectedClasses: []
    };
  },
  created(){
    this.clearAllFilters();
  },
  computed: {
    uniqueCameras() {
      const cameras = new Set();
      for (const item of this.data.datasets) {
        cameras.add(item.camera);
      }
      return Array.from(cameras);
    },
    uniqueModels() {
      const models = new Set();
      for (const item of this.data.datasets) {
        models.add(item.model);
      }
      return Array.from(models);
    },
    uniqueClasses() {
        const classlist = new Set();
        for (const item of this.data.datasets) {
            classlist.add(item.classes);
        }
        return Array.from(classlist);
    },
    filteredCameras() {
        return this.data.datasets.filter(item => this.selectedCameras.includes(item.camera));
    },
    filteredModels() {
        return this.data.datasets.filter(item => this.selectedModels.includes(item.model));
    },
    filteredClasses() {
        return this.data.datasets.filter(item => this.selectedClasses.includes(item.classes));
    },
  },
  methods: {
      getClassColor(className) {
    const classObj = this.classesColor.find(item => item.className === className);
    return classObj ? classObj.classColor : '';
  },
    openImageDialog(item) {
        console.log(item);
        this.selectedImage = item;
        this.imagedialog = true;
    },
    clearAllFilters() {
        this.selectedCameras = [];
        this.selectedModels = [];
        this.selectedClasses = [];
        this.applyFilters();
    },
    applyFilters() {
        console.log("Applying filters...");
        let filteredData = this.data.datasets;

        if (this.selectedCameras.length > 0) {
            console.log(this.selectedCameras);
            filteredData = filteredData.filter(item => this.selectedCameras.includes(item.camera));
        }
        if (this.selectedModels.length > 0) {
            console.log(this.selectedModels);
            filteredData = filteredData.filter(item => this.selectedModels.includes(item.model));
        }
        if (this.selectedClasses.length > 0) {
            console.log(this.selectedClasses);
            filteredData = filteredData.filter(item => this.selectedClasses.includes(item.classes));
        }

        this.filteredDatasets = filteredData;
    },
  },
  watch: {
    uniqueCameras: {
      immediate: true,
      handler() {
        this.selectedCameras = this.uniqueCameras;
      }
    },
    uniqueClasses: {
      immediate: true,
      handler() {
        this.selectedClasses = this.uniqueClasses;
      }
    },
    uniqueModels: {
      immediate: true,
      handler() {
        this.selectedModels = this.uniqueModels;
      }
    }
  }
};
</script>
<style scoped>
.card {
  display: flex;
  align-items: stretch; /* Ensures both columns are of equal height */
}
label.check {
  cursor: pointer;
}
label.check input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}
label.check span {
    width: 100%;
    text-align: center;
    padding: 5% 10%;
    border: 2px solid #8f37aa;
    display: inline-block;
    color: #8f37aa;
    border-radius: 3px;
}
label.check input:checked + span {
  border-color: #8f37aa;
    background-color: #8f37aa;
    color: #fff;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  margin: 50px auto;
  position: relative;
}
.image {
  width: 400px;
  max-width: 100%;
}
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