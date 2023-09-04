<template >
    <v-row justify="space-between" class="mt-2"> 
        <v-col cols="6" class="ml-12 mt-12">    
            <p class="text-h6">Dataset Name</p>
            <p class="caption ma-1 ml-10">Last updated on 01/06/23 at 11:25</p>
        </v-col>

    </v-row>
    <v-divider :thickness="2" color="black"></v-divider>
    <v-row  class="mt-3" justify="center">
        <v-col cols="3"> 
            <v-row>
                <v-card class=" ml-5 my-3" style="background-color: white; " min-width="90%" >
                    <v-btn variant="text" class="text-none" min-width="100%" prepend-icon="mdi-plus-circle"> Add to Dataset</v-btn>
                </v-card> 
            </v-row>
            <v-row>
                <v-card class=" ml-5 my-3" style="background-color: white;" min-width="90%" >
                    <v-btn variant="text" class="text-none" min-width="100%" prepend-icon="mdi-minus-circle"> Delete Dataset </v-btn>
                </v-card> 
            </v-row>
            <v-row>
                
            <v-card class="px-6 ml-5 my-3" style="background-color: white; height: 100%;" min-width="90%" >
                <v-row class="pt-3">
                    <h2> Overview </h2>  
                </v-row>
                <v-row class="pa-4">
                    <v-col style="margin-top: -3%;">
                        <v-row class="pl-1">
                            <p>{{ totalImages }} Images</p>
                        </v-row>
                        <v-row class="pl-4">
                            <v-icon size="x-small" icon="mdi-checkbox-marked-circle"></v-icon> <p class="text-caption">{{totalAnnotatedImages}} Annotated</p>
                        </v-row>
                        <v-row class="pl-4">
                            <v-icon size="x-small" icon="mdi-circle-outline"></v-icon> <p class="text-caption">{{totalUnannotatedImages}} Unannotated</p>
                        </v-row>
                                                
                    </v-col>
                </v-row>
                <v-row  v-for="(item, index) in uniqueClasses" :key="index" class="mt-n3 mb-3">
                    <v-col>
                        <label class="check" >
                            <input type="checkbox" v-model="selectedClasses" :value="item" :label="item" :checked="selectedClasses.includes(item)" @change="updateFilters">
                            <span :style="{ '--class-background-color': classColors[item], '--class-text-color': 'black' }"> 
                                <v-row class="pb-1" justify="center">
                                    <p class="text-subtitle-1">{{ item }} Images : </p> {{ classCounts[item].total }}
                                </v-row>
                                <v-row>
                                    <v-col cols="6">
                                        <v-row>
                                            <v-icon size="x-small" icon="mdi-checkbox-marked-circle"></v-icon> <p class="text-caption">{{ classCounts[item].annotated }} Annotated</p>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-row>
                                            <v-icon size="x-small" icon="mdi-circle-outline"></v-icon> <p class="text-caption">{{ classCounts[item].unannotated }} Unannotated</p>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </span>
                        </label>
                    </v-col>
                </v-row>
            </v-card>
            </v-row>  <!-- 3*4=12    -->
        </v-col>
        
        <v-col cols="9" class="mt-3">
            <v-row class="ml-2 mr-4">
                <v-btn-toggle mandatory class="w-100" 
      v-model="toggle">

                    <v-btn variant="text" min-width="50%" class="text-none notselected-class" selected-class="selected-class"  value="unannotated">
                        
                        <h4 > Unannotated Data _</h4>
                        <h4 >_ {{totalUnannotatedImages}} </h4>
                    </v-btn>

                    <v-btn variant="text" min-width="50%" class="text-none notselected-class" selected-class="selected-class"  value="annotated">
                        <h4>Annotated Data _</h4>
                        <h4>_ {{totalAnnotatedImages}} </h4>
                    </v-btn>

                </v-btn-toggle>
            </v-row>
            <v-row justify="center" align="center" v-if="filteredImages.length === 0">
                    <v-img 
                    src="../assets/empty.png" alt="empty pic" 
                style="max-width: 30%;"></v-img>
            </v-row>

            <v-row style="margin-right: 2%;">
                <v-col v-for="(item, index) in filteredImages" :key="index" cols="2">    <!-- 3*4=12    -->
                    <v-hover v-slot="{ isHovering, props }">
                    <v-card class="pa-5 ma-3" style="background-color: white; border: 1px  grey; width: 100%; height: 100%;"         
                    v-bind="props"
                        :elevation="isHovering ? 24 : 6"
                        @click="openImageDialog(item)" 
                        >
                        <v-row style="padding-top: 5%;padding-bottom: 5%;">
                            
                            <v-img 
          class="align-end" cover
                    :src="item.image" alt="pc pic" width="40%"></v-img>
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
                            <p class="font-weight-medium" style="padding-left: 10%;">  Last modification on : </p>
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
                            <p class="font-weight-medium" style="padding-left: 10%;">  Classes annotated : </p>
                        </v-row>
                        <v-row class="mt-n2 mb-6" no-gutters >
                            <v-col cols="6" class="ml-10">
                                <v-icon :color="classColors[selectedImage.classes]" icon="mdi-circle-slice-8" /> {{selectedImage.classes}}
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="9" >
                        <div class="ma-0 pa-0">
                            <v-img 
                            class="ma-2 pa-2"
                                width="1500"
                                :aspect-ratio="16/9"
                                :src=selectedImage.image alt="pc pic" >
                        </v-img>
                        </div>
                        
                    </v-col>
                </v-row>
            </v-card-item>
        <v-card-item style="border-top: 2px solid black;">
                    <v-row no-gutters  class="justify-center" style="padding-bottom: 2%;padding-left: 7%;">
                        <v-col cols="6"> 
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
                                        <h4>Cancel</h4>
                                    </v-btn>
                                </v-btn-group>
                        </v-col>
                        <v-col no-gutters  cols="6">
                            <v-btn-group class="custom-toggle-btn" divided variant="outlined">
                                <v-btn icon class="custom-toggle-btn-icon">
                                    <v-icon size="small" class="custom-toggle-btn-icon-icon">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                                <v-btn class="custom-toggle-btn-text">
                                    <h4>Save</h4>
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
    
    toggle: 'unannotated',
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
                className: "Water",
                classColor: "yellow",
            }
        ],
        datasets: [
            {
                image: "/static/example.jpg",
                classes: 'Oil',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'true',
                Annotation: '0 0.8 0.8 0.7 0.65'
            },
            {
                image: "/static/example.jpg",
                classes: 'Oil',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'true',
                Annotation: '0 0.8 0.8 0.7 0.65'
            },
            {
                image: "/static/exampleNotAnnotated.jpg",
                classes: 'Oil',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'false',
                Annotation: ''
            },
            {
                image: "/static/exampleNotAnnotated.jpg",
                classes: 'Oil',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'false',
                Annotation: ''
            },
            {
                image: "/static/exampleNotAnnotated.jpg",
                classes: 'Oil',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'false',
                Annotation: ''
            },
            {
                image: "/static/exampleNotAnnotated.jpg",
                classes: 'Oil',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'false',
                Annotation: ''
            },
            {
                image: "/static/exampleNotAnnotated.jpg",
                classes: 'Water',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'false',
                Annotation: ''
            },
            {
                image: "/static/example.jpg",
                classes: 'Bottle',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'true',
                Annotation: '0 0.8 0.8 0.7 0.65'
            },
            {
                image: "/static/exampleNotAnnotated.jpg",
                classes: 'Bottle',
                dateAdded: '20/7/2023', 
                timeAdded: '18:05',
                Annotated: 'false',
                Annotation: ''
            },
        ]
    },
    selectedImage:undefined,
    imagedialog: false,
    selectedClasses: []
};
},
created(){
this.clearAllFilters();
},
computed: {
    filteredImages() {
    if (this.toggle === 'unannotated') {
      return this.filteredDatasets.filter(item => item.Annotated === 'false');
    } else if (this.toggle === 'annotated') {
      return this.filteredDatasets.filter(item => item.Annotated === 'true');
    }
    return this.filteredDatasets;
  },
    totalImages() {
        console.log(this.data.datasets.length);
    return this.data.datasets.length;
  },
  totalAnnotatedImages() {
    return this.data.datasets.filter(item => item.Annotated === 'true').length;
  },
  totalUnannotatedImages() {
    return this.data.datasets.filter(item => item.Annotated === 'false').length;
  },
  classCounts() {
    const counts = {};
    this.data.datasets.forEach(item => {
      if (!counts[item.classes]) {
        counts[item.classes] = {
          total: 0,
          annotated: 0,
          unannotated: 0
        };
      }
      counts[item.classes].total++;
      if (item.Annotated === 'true') {
        counts[item.classes].annotated++;
      } else {
        counts[item.classes].unannotated++;
      }
    });
    return counts;
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
filteredClasses() {
    return this.data.datasets.filter(item => this.selectedClasses.includes(item.classes));
},
},
methods: {
    updateFilters() {
    // Filter the images immediately based on selectedClasses
    let filteredData = this.data.datasets;

    if (this.selectedClasses.length > 0) {
        filteredData = filteredData.filter(item => this.selectedClasses.includes(item.classes));
    }

    // Update the filteredDatasets with the filtered images
    this.filteredDatasets = filteredData;
  },
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
    this.selectedClasses = [];
    this.applyFilters();
},
applyFilters() {
    console.log("Applying filters...");
    let filteredData = this.data.datasets;

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
.selected-class {
    color: #274C77 !important;
    border-radius: 0% !important; 
    border-bottom: 4px solid #274C77 !important;
}
.notselected-class {
    color: #8B8C89;
    border-bottom: 4px solid #8B8C89;
}
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