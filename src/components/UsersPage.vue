<template>
    <v-row justify="space-between" class="mt-2"> 
        <v-col cols="6" class="ml-12 mt-12">    
            <p class="text-h6">Users</p>
            <p class="caption ma-1 ml-10">Last updated on 01/06/23 at 11:25</p>
        </v-col>
    </v-row>
    <v-divider :thickness="2" color="black"></v-divider>
    <v-row class="mt-3" justify="center">
      <v-col cols="2"> 
            <v-row>
                <v-card class=" ml-5 my-3" style="background-color: white; " min-width="90%" >
                    <v-btn variant="text" class="text-none" min-width="100%" prepend-icon="mdi-plus-circle" @click="openAddDialog()" > Add User</v-btn>
                </v-card> 
            </v-row>
            <v-row> 
              <v-card class="px-6 ml-5 my-3" style="background-color: white; height: 100%;" min-width="90%" >
                  <v-row class="pt-3">
                      <p class="text-h5">Overview </p>  
                  </v-row>
                  <v-row class="pt-3 ml-0">
                      <p class="text-subtitle-2"> Total Users </p>  
                  </v-row>
                  <v-row class="pa-1 ml-5">
                      <p class="text-body-2">{{ userCount }} Users</p>
                  </v-row>
                  <v-row class="pa-1 ml-8">
                      
                      <span class="text-body-2"><v-icon>mdi-account-tie</v-icon> Super Admins : {{ userSuperCount }} </span>
                  </v-row>
                  <v-row class="pa-1 ml-8">
                      
                      <span class="text-body-2"><v-icon>mdi-account-cog</v-icon> Admins : {{ userAdminCount }}</span>
                  </v-row>
                  <v-row class="pa-1 ml-8">
                      
                      <span class="text-body-2"><v-icon>mdi-account</v-icon> Users : {{ userUserCount }}</span>
                  </v-row>
                  <v-row class="mb-3"></v-row>

                </v-card>
            </v-row>
                    </v-col>
        <v-col cols="10">
            <v-card class="mr-10">
                <v-row justify="center" class="text-center pt-2" style="background-color:darkgrey;">
                    <v-col cols="1">
                        <span>Id</span>
                    </v-col>
                    <v-col cols="2">
                        <span>Username</span>
                    </v-col>
                    <v-col cols="2">
                        <span>First Name</span>
                    </v-col>
                    <v-col cols="2">
                        <span>Last Name</span>
                    </v-col>
                    <v-col cols="2">
                        <span>Password</span>
                    </v-col>
                    <v-col cols="1">
                        <span>Role</span>
                    </v-col>
                    <v-col cols="2">
                        <span>Actions</span>
                    </v-col>
                </v-row>
                
                <v-row class="text-center mb-1" v-for="(item, index) in data.users" :key="index">
                    <v-col cols="1">
                        <span>{{item.userId}}</span>
                    </v-col>
                    <v-col cols="2">
                        <span>{{item.userUsername}}</span>
                    </v-col>
                    <v-col cols="2">
                        <span>{{item.userFirstName}}</span>
                    </v-col>
                    <v-col cols="2">
                        <span>{{ item.userLastName }}</span>
                    </v-col>
                    <v-col cols="2">
                        <span>{{ item.userPasswordHashed }}</span>
                    </v-col>
                    <v-col cols="1">
                        <v-icon v-if="item.userRole === 'SuperAdmin'">mdi-account-tie</v-icon>
                        <v-icon v-else-if="item.userRole === 'Admin'">mdi-account-cog</v-icon>
                        <v-icon v-else>mdi-account</v-icon>
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
        <!-- Add User Dialog -->
        <v-dialog v-model="addDialog" max-width="900px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Add New User</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="newUser.userFirstName" label="First Name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="newUser.userLastName" label="Last Name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="9">
                            <v-text-field v-model="newUser.userUsername" label="Username"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-select v-model="newUser.userRole" label="User Role" :items="roleList"></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="newUser.userPasswordHashed" label="Password"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="newUser.userPasswordHashed" label="Confirm Password"></v-text-field>
                        </v-col>
                    </v-row>
                <!-- Your form fields for adding a class go here -->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeAddDialog">Cancel</v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="saveNewUser">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Edit User Dialog -->
        <v-dialog v-model="editDialog" max-width="900px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit {{ editedItem.userUsername }}</span>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field v-model="editedItem.userFirstName" label="First Name"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="editedItem.userLastName" label="Last Name"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="9">
                            <v-text-field v-model="editedItem.userUsername" label="Username"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-select v-model="editedItem.userRole" label="User Role" :items="roleList"></v-select>
                        </v-col>
                    </v-row>

                <!-- Your form fields for adding a class go here -->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="closeEditDialog">Cancel</v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="saveEditedUser">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    <!-- Delete Class Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Delete User</span>
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete this user ?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeDeleteDialog">Cancel</v-btn>
          <v-btn color="red" dark @click="deleteUser">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
data() {
    return {
        data: {
            users:[
                {
                    userId: "0",
                    userFirstName: "one piece",
                    userLastName: "real",
                    userRole: "SuperAdmin",
                    userUsername: "aaa",
                    userPasswordHashed: "adada",
                },
                {
                    userId: "1",
                    userFirstName: "all",
                    userLastName: "blue",
                    userRole: "Admin",
                    userUsername: "aaa",
                    userPasswordHashed: "adada",
                },
                {
                    userId: "2",
                    userFirstName: "binkisake",
                    userLastName: "laboon",
                    userRole: "User",
                    userUsername: "aaa",
                    userPasswordHashed: "adada",
                },
                {
                    userId: "3",
                    userFirstName: "took d",
                    userLastName: "photo",
                    userRole: "User",
                    userUsername: "aaa",
                    userPasswordHashed: "adada",
                },
                {
                    userId: "4",
                    userFirstName: "Oil",
                    userLastName: "blue",
                    userRole: "User",
                    userUsername: "aaa",
                    userPasswordHashed: "adada",
                },
            ],
        },
        addDialog: false,
        editDialog: false,
        deleteDialog: false,
        newUser: {
            userId: "8",
            userFirstName: "",
            userLastName: "",
            userRole: "",
            userUsername: "",
            userPasswordHashed: "",
        },
        editedItem: {
            userId: "",
            userFirstName: "",
            userLastName: "",
            userRole: "",
            userUsername: "",
            userPasswordHashed: "",
        },
        selectedItemIndex: -1,
    roleList: ['SuperAdmin','Admin', 'User'],
      };
  },
  computed: {
  userCount() {
    return this.data.users.length;
  },
  userAdminCount() {
    return this.data.users.filter(user => user.userRole === "Admin").length;
  },  
  userSuperCount() {
    return this.data.users.filter(user => user.userRole === "SuperAdmin").length;
  },
  userUserCount() {
    return this.data.users.filter(user => user.userRole === "User").length;
  },
},
  methods: {
      openAddDialog() {
        this.addDialog = true;
      },
      closeAddDialog() {
        this.addDialog = false;
        // Clear form fields if needed
        this.newUser = {
            userId: "",
            userFirstName: "",
            userLastName: "",
            userRole: "",
            userUsername: "",
            userPasswordHashed: "",
        };
      },
      saveNewUser() {
          // Save the new class data to your users array
          this.data.users.push({ ...this.newUser });
          this.closeAddDialog();
      },
      openEditDialog(item) {
          this.selectedItemIndex = this.data.users.indexOf(item);
          this.editedItem = { ...item };
          this.editDialog = true;
      },
      closeEditDialog() {
          this.editDialog = false;
          // Clear form fields if needed
          this.editedItem = {
            userId: '',
            userFirstName: '',
            userLastName: '',
            userRole: '',
            userUsername: '',
            userPasswordHashed: '',
          };
          this.selectedItemIndex = -1;
      },
      saveEditedUser() {
          // Update the edited class data in your users array
          if (this.selectedItemIndex !== -1) {
            this.data.users[this.selectedItemIndex] = { ...this.editedItem };
            this.closeEditDialog();
        }
      },
      openDeleteDialog(item) {
          this.selectedItemIndex = this.data.users.indexOf(item);
          this.deleteDialog = true;
      },
      closeDeleteDialog() {
          this.deleteDialog = false;
          this.selectedItemIndex = -1;
      },
      deleteUser() {
          // Remove the selected class from your users array
          if (this.selectedItemIndex !== -1) {
            this.data.users.splice(this.selectedItemIndex, 1);
            this.closeDeleteDialog();
        }
      },
    },
};
</script>

