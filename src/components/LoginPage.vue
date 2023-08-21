<template>
    <v-container class="background d-flex justify-center " fluid fill-height>

        <v-col cols="5" lg="5" height="100%" >
            <v-card color="#324A5F" class="pa-4 justify-center align-center" height="100%">
                <!-- <div style="width: 30%;"><h1 class="gradient-3">QMC</h1></div> -->
                
                <div class="text-center" style="margin-top: 25%;">
                    <v-avatar size="50" color="#F4F6F8">
                        <v-icon size="40" color="#1d4370" >mdi-account</v-icon>
                    </v-avatar>
                    <h2 class="indigo--text" style="color: #F4F6F8;margin-top: 2%;">Login</h2>
                </div>
                <v-form style="margin-top: 5%;">
                    <v-card-text>
                        <v-text-field class="text-white" style="margin-left: 10%;margin-right: 10%;"
                            type="email"
                            label="Login"
                            placeholder="Login"
                            prepend-inner-icon="mdi-account"

                        >
                        </v-text-field>
                        <v-text-field class="text-white" c style="margin-left: 10%;margin-right: 10%;"

                        
                            :append-inner-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                            :type="passwordShow ? 'text' : 'password'"
                            name="input-2"
                            label="Password"
                            placeholder="Password"
                            prepend-inner-icon="mdi-key"
                            @click:append-inner="passwordShow = !passwordShow"
                        >
                        </v-text-field>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn class="btn btn-outline-custom-primary custom-primary-button  custom-outline-primary-button" style="width: 78%;margin-top: 0%;">
                            <span>Login</span>
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-col>
        <v-col cols="6" lg="6" height="100%" >
            <v-card color="#0C1821" class="pa-4 justify-center align-center" height="100%" >
                <div class="text-center" style="margin-top: 3%; ">
                    <v-img src="../assets/logo.png" alt="Holcim logo" width="25%">
                    </v-img>
                    
                </div>
                <!-- <div class="img"></div> -->

            </v-card>
        </v-col>
    </v-container>
</template>
<script>


export default {

  components: {
  },
    data: () => ({
        passwordShow: false,
    }),
};
</script>

<style>
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
