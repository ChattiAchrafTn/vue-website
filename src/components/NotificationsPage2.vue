<template >
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
                                <span :style="{ '--class-background-color': 'purple', '--class-text-color': 'white' }"> Camera {{ item }} </span>
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
                                <span :style="{ '--class-background-color': classColors[item], '--class-text-color': 'black' }"> {{ item }} </span>
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
                            <v-btn  @click="applyFilters" type="submit" class="btn rounded-pill" style="width: 100%; background-color: #274C77;color: white;">
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
            <v-col v-if="filteredDatasets.length === 0" cols="9" class="mt-3">
                <v-row  justify="center" align="center">
                        <v-img 
                        src="../assets/empty.png" alt="empty pic" 
                style="max-width: 30%;"></v-img>
                </v-row>
                <v-row justify="center" align="center">
                <h3>
                    No notifications are found ! 
                </h3>
                </v-row>
            </v-col>
            <v-col v-else cols="9" class="mt-3">
                <v-row  style="margin-right: 2%;">
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

                <v-card>
                    <v-card-title style="border-bottom: 2px solid black;">
                    <v-row  style="padding-top:2%;padding-bottom: 2%;padding-left: 7%;">
                                <h2 class="font-weight-medium"> Notification </h2>
                    </v-row>
                </v-card-title>
                <v-card-item style="margin-top:0%;padding-top: 0%;">
                    <v-row>
                        <v-col no-gutters cols="3" style="border-right: 2px solid black;" class="ml-0 pl-0" >
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
                            <v-row class="mt-1 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Detected by : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-3 ml-10">
                                    <v-icon icon="mdi-cctv" /> Camera {{ selectedImage.camera}}
                            </v-row>
                            
                            <v-row class="mt-8 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Classes detected : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-6" no-gutters >
                                <v-col cols="6" class="ml-10">
                                    <v-icon :color="classColors[selectedImage.classes]" icon="mdi-circle-slice-8" /> {{selectedImage.classes}}
                                </v-col>
                            </v-row>
                            <v-row class="mt-8 mb-6">
                                <p class="font-weight-medium" style="padding-left: 10%;">  Model used : </p>
                            </v-row>
                            <v-row class="mt-n2 mb-3 ml-10">
                                    <v-icon icon="mdi-file-cog-outline" /> {{selectedImage.model}}
                            </v-row>

                        </v-col>
                        <v-col cols="9" >
                            <div class="ma-0 pa-0">
                                <v-img 
                                class="ma-2 pa-2"
                                    width="1500"
                                    :aspect-ratio="16/9"
                                    src="static/example.jpg" alt="pc pic" >
                            </v-img>
                            </div>
                            
                        </v-col>
                    </v-row>
                </v-card-item>
            <v-card-item style="border-top: 2px solid black;">
                        <v-row no-gutters  class="justify-center" style="padding-bottom: 2%;padding-left: 7%;">
                            <v-col cols="3"> 
                                <v-btn-group 
                            
                                        class="custom-toggle-btn"
                                        
                                        variant="outlined"
                                        >
                                        <v-btn
                                            icon
                                            @click="handleDeleteButtonClick"
                                            class="custom-toggle-btn-icon"
                                        >
                                            <v-icon size="small" class="custom-toggle-btn-icon-icon">mdi-close-circle</v-icon>
                                        </v-btn>
                                        <v-btn
                                            @click="handleDeleteButtonClick"
                                            class="custom-toggle-btn-text"
                                        >
                                            <h4>False Detection</h4>
                                        </v-btn>
                                    </v-btn-group>
                            </v-col>
                            <v-col cols="3">
                                <v-btn-group
                                        class="custom-toggle-btn"
                                        divided
                                        variant="outlined"
                                        >
                                        <v-btn
                                            
                                            icon
                                            @click="handleDeleteButtonClick"
                                            class="custom-toggle-btn-icon"
                                        >
                                            <v-icon size="small" class="custom-toggle-btn-icon-icon">mdi-check-circle</v-icon>
                                        </v-btn>
                                        <v-btn
                                            @click="handleDeleteButtonClick"
                                            class="custom-toggle-btn-text"
                                        >
                                            <h4>Valid Detection</h4>
                                        </v-btn>
                                    </v-btn-group>
                            </v-col>
                            <v-col cols="3">
                                <v-btn-group
                                        class="custom-toggle-btn"
                                        divided
                                        variant="outlined"
                                        >
                                        <v-btn
                                            
                                            icon
                                            @click="handleDeleteButtonClick"
                                            class="custom-toggle-btn-icon"
                                        >
                                            <v-icon size="small" class="custom-toggle-btn-icon-icon">mdi-download</v-icon>
                                        </v-btn>
                                        <v-btn
                                            @click="handleDeleteButtonClick"
                                            class="custom-toggle-btn-text"
                                        >
                                            <h4>Download</h4>
                                        </v-btn>
                                    </v-btn-group>
                            </v-col>
                            <v-col no-gutters  cols="3">
                                <v-btn-group class="custom-toggle-btn" divided variant="outlined">
                                    <v-btn icon class="custom-toggle-btn-icon">
                                        <v-icon size="small" class="custom-toggle-btn-icon-icon">
                                            mdi-delete
                                        </v-icon>
                                    </v-btn>
                                    <v-btn class="custom-toggle-btn-text">
                                        <h4>Ignore</h4>
                                    </v-btn>
                                </v-btn-group>
                            </v-col>
                        </v-row>
                    </v-card-item>


                </v-card>
            </v-dialog>
        </v-row>
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
                    classColor: "blue",
                },
                {
                    classId: "1",
                    className: "Bottle",
                    classColor: "red",
                },
                {
                    classId: "2",
                    className: "water",
                    classColor: "yellow",
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
    classColors() {
        const classColors = {};
        for (const classData of this.data.classesColor) {
        classColors[classData.className] = classData.classColor;
        }
        return classColors;
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
.custom-toggle-btn { /* Match the outlined variant's border color */

  border-radius:2%; /* Remove the button's border radius */
}
.custom-toggle-btn-icon {
    background-color: #22223b;
    color: #E7ECEF;
}

.custom-toggle-btn-text {
    background-color: #274C77;
    color: #E7ECEF;
    width: 12em;
}
.custom-toggle-btn:hover .custom-toggle-btn-icon {
    background-color: #274C77;
    color: #E7ECEF;
}

.custom-toggle-btn:hover .custom-toggle-btn-text {
    background-color: #22223b;
    color: #E7ECEF;
}
.button-content {
    display:flex;
}

.icon-container {
    width: 20%;
    left: 0;
    height: 100%;
}

.text-container {
    width: 80%;
}

.icon {
    font-size: 24px; /* Adjust as needed */
}


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
  background-color: var(--class-background-color);
  color: var(--class-text-color);
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