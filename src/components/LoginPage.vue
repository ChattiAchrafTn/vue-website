<template>
    <v-container class="background d-flex justify-center " fluid fill-height>
        <v-snackbar globalTop color="green" v-model="snackbar">
        Login Successful
    </v-snackbar>
        <v-col cols="false" lg="5" height="100%" >
            <v-card color="#324A5F" class="pa-4 justify-center align-center" height="100%">
                <v-img src="../assets/smartech_White.png" alt="pc pic" width="40%" style="margin-left: 5%;">
                    </v-img>
                
                <div class="text-center" style="margin-top: 15%;">
                    <v-avatar size="50" color="#F4F6F8">
                        <v-icon size="40" color="#1d4370" >mdi-account</v-icon>
                    </v-avatar>
                    <h2 class="indigo--text" style="color: #F4F6F8;margin-top: 2%;">Login</h2>
                </div>
                <v-form style="margin-top: 5%;" @submit.prevent="submitHandler" ref="form">
                    <v-card-text>
                        <v-text-field class="text-white" style="margin-left: 10%;margin-right: 10%;"
                            v-model="login"
                            :rules="loginRules"
                            label="Login"
                            placeholder="Login"
                            prepend-inner-icon="mdi-account"

                        >
                        </v-text-field>
                        <v-text-field class="text-white" style="margin-left: 10%;margin-right: 10%;"

                        v-model="password"
                        :rules="passwordRules"
                            :append-inner-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                            :type="passwordShow ? 'text' : 'password'"
                            name="input-2"
                            label="Password"
                            placeholder="Password"
                            prepend-inner-icon="mdi-key"
                            @click:append-inner="passwordShow = !passwordShow"
                        >
                        </v-text-field>
                        <v-switch label="Remember password" style="color:white;margin-left: 10%;margin-right: 10%;"></v-switch>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn :loading="loading" type="submit" class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 78%;margin-top: -10%;">
                            <span>Login</span>
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-col>
        <v-col cols="false" lg="5" height="100%" >
            <v-card color="#0C1821" class="pa-4 justify-center align-center" height="100%" >

                    <CarousselComp style="height: 100%;"></CarousselComp>
                <!-- <div class="img"></div> -->

            </v-card>
        </v-col>
    </v-container>

</template>
<script>


import CarousselComp from './CarousselComp.vue'
export default {

  components: {
    CarousselComp,
  },
    data: () => ({
        loading:false,
        snackbar:false,
        passwordShow: false,
        login: '',
        loginRules: [
            v => !!v || 'Login is Required',
            v => (v && v.length < 10) || 'Login must be less than 10 characters' ,
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 3) || 'Password must be atleast 3 charecters long'
        ]
    }),
    methods:{
        submitHandler(){
            if (this.$refs.form.validate()){
                this.loading = true
                setTimeout(()=>{
                    this.loading = false
                    this.snackbar = true
                },2000)
            }
        }
    }

};
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
.img {
    background-image: url(../assets/logo.png) !important;
    height: 60%;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: cover;
}
.background{
    background-color: #CCC9DC;
    height: 100%;

}
.text-white input {
      color: #F4F6F8 !important;
    }





#app h1 {
  font-size: 45px;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 3px 2px rgba(0, 0,0, .1));
  font-family: 'Lobster';
  margin-top: 5%;
  margin-left: 5%;
}

.gradient-3 {
  background: linear-gradient(to right, #94C12E 15%, #04BBF1 50%, #1d4370 100%);
}
  /* linear-gradient(to right, #94C12E 15%, #04BBF1 50%, #1d4370 100%); background */
</style>
