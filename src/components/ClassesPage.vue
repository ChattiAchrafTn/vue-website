<template>
    <v-row justify="space-between"> 
        <v-col cols="6" class="ml-12 mt-12">    
            <p class="text-h6">Classes</p>
            <p class="caption ma-1 ml-10">Last updated on 01/06/23 at 11:25</p>
        </v-col>
    </v-row>
    <v-divider :thickness="2" color="black"></v-divider>
    <v-row class="mt-1" justify="center">
      <v-col cols="2"> 
            <v-row>
                <v-card class=" ml-5 my-3" style="background-color: white; " min-width="90%" >
                    <v-btn variant="text" class="text-none" min-width="100%" prepend-icon="mdi-plus-circle" @click="openAddDialog()" > Add Class</v-btn>
                </v-card> 
            </v-row>
            <v-row> 
              <v-card class="px-6 ml-5 my-3" style="background-color: white; height: 100%;" min-width="90%" >
                  <v-row class="pt-3">
                      <p class="text-h5">Overview </p>  
                  </v-row>
                  <v-row class="pt-3 ml-0">
                      <p class="text-subtitle-2"> Total Classes </p>  
                  </v-row>
                  <v-row class="pa-1 mb-2 ml-5">
                      <p class="text-body-2">{{ classCount }} Classes</p>
                  </v-row>
                  <v-row class="pt-1 ml-0">
                    <p class="text-subtitle-2">Currently in use Classes </p> 
                  </v-row>
                  <v-row v-for="(item, index) in data.classes" :key="index" class="pa-1 ml-5">
                      <v-icon :color="item.classColor">mdi-rectangle</v-icon>
                      <span class="text-body-2">{{ item.className }}</span>
                  </v-row>
                  <v-row class="mb-3"></v-row>

                </v-card>
            </v-row>
                    </v-col>
        <v-col cols="9">
            <v-card >
                <v-row justify="center" class="text-center pt-2" style="background-color:darkgrey;">
                    <v-col cols="2">
                        <span>Id</span>
                    </v-col>
                    <v-col cols="4">
                        <span>Class Name</span>
                    </v-col>
                    <v-col cols="4">
                        <span>Color</span>
                    </v-col>
                    <v-col cols="2">
                        <span>Actions</span>
                    </v-col>
                </v-row>
                
                <v-row class="text-center mb-1" v-for="(item, index) in data.classes" :key="index">
                    <v-col cols="2">
                        <span>{{ item.classId }}</span>
                    </v-col>
                    <v-col cols="4">
                        <span>{{ item.className }}</span>
                    </v-col>
                    <v-col cols="4">
                                <v-icon :color="item.classColor">mdi-rectangle</v-icon>
                        
                                <span>{{ item.classColor }}</span>
                            
                    </v-col>
                    <v-col cols="2">
                            <v-icon
                                size="small"
                                class="me-2"
                                @click="openEditDialog(item)" 
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                size="small"
                                @click="openDeleteDialog(item)" 
                            >
                                <!-- @click="deleteItem(item.raw)" -->
                                mdi-delete
                            </v-icon>  
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols="1">

        </v-col>
    </v-row>
        <!-- Add Class Dialog -->
        <v-dialog v-model="addDialog" max-width="500px">

      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Class</span>
        </v-card-title>
        <v-card-text>
          <!-- Your form fields for adding a class go here -->
          <v-text-field v-model="newClass.classId" label="Class Id"></v-text-field>
          <v-text-field v-model="newClass.className" label="Class Name"></v-text-field>
          <v-select v-model="newClass.classColor" label="Class Color" :items="availableColors"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeAddDialog">Cancel</v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="saveNewClass">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Edit Class Dialog -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Class</span>
        </v-card-title>
        <v-card-text>
          <!-- Your form fields for editing a class go here -->
          <v-text-field v-model="editedItem.classId" label="Class Id"></v-text-field>
          <v-text-field v-model="editedItem.className" label="Class Name"></v-text-field>
<v-select v-model="editedItem.classColor" label="Class Color" :items="availableColors"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeEditDialog">Cancel</v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="saveEditedClass">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Class Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Delete Class</span>
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete this class?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeDeleteDialog">Cancel</v-btn>
          <v-btn color="red" dark @click="deleteClass">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
data() {
    return {
        data: {
            classes:[
                {
                classId: "0",
                className: "Oil",
                classColor: "blue",
                },
                {
                classId: "1",
                className: "Water",
                classColor: "yellow",
                },
                {
                classId: "2",
                className: "Bottle",
                classColor: "red",
                },
                {
                classId: "3",
                className: "Cement Bag",
                classColor: "black",
                },
                {
                classId: "4",
                className: "Car",
                classColor: "green",
                },
            ],
        },
        addDialog: false,
        editDialog: false,
        deleteDialog: false,
        newClass: {
            classId: '',
            className: '',
            classColor: '',
        },
        editedItem: {
            classId: '',
            className: '',
            classColor: '',
        },
        selectedItemIndex: -1,
        availableColors: ['blue', 'yellow', 'red', 'black', 'green'], // List of available colors
      };
  },
  computed: {
  classCount() {
    return this.data.classes.length;
  },
},
  methods: {
      openAddDialog() {
        this.addDialog = true;
      },
      closeAddDialog() {
        this.addDialog = false;
        // Clear form fields if needed
        this.newClass = {
          classId: '',
          className: '',
          classColor: '',
        };
      },
      saveNewClass() {
          // Save the new class data to your classes array
          this.data.classes.push({ ...this.newClass });
          this.closeAddDialog();
      },
      openEditDialog(item) {
          this.selectedItemIndex = this.data.classes.indexOf(item);
          this.editedItem = { ...item };
          this.editDialog = true;
      },
      closeEditDialog() {
          this.editDialog = false;
          // Clear form fields if needed
          this.editedItem = {
            classId: '',
            className: '',
            classColor: '',
          };
          this.selectedItemIndex = -1;
      },
      saveEditedClass() {
          // Update the edited class data in your classes array
          if (this.selectedItemIndex !== -1) {
            this.data.classes[this.selectedItemIndex] = { ...this.editedItem };
            this.closeEditDialog();
        }
      },
      openDeleteDialog(item) {
          this.selectedItemIndex = this.data.classes.indexOf(item);
          this.deleteDialog = true;
      },
      closeDeleteDialog() {
          this.deleteDialog = false;
          this.selectedItemIndex = -1;
      },
      deleteClass() {
          // Remove the selected class from your classes array
          if (this.selectedItemIndex !== -1) {
            this.data.classes.splice(this.selectedItemIndex, 1);
            this.closeDeleteDialog();
        }
      },
    },
};
</script>

