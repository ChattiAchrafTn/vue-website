<template>
    <nav  
        :class="['navbar', 'navbar-expand-lg', 'custom-navbar']" 
    >
    <div class="d-flex align-items-center">
      <a href="#"><img src="../static/logo.png" class=" logo d-inline-block align-top" alt="" style="max-width: 20%; "></a>
    </div>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">

                <li>
                    <a
                    href="#"
                    @click="changeView('OpView')"
                        class="nav-link"
                        :class="{ active: selectedView === 'OpView' }"
                        >Operator View
                </a>
                </li>
                <li>
                    <a
                    href="#"
                    @click="changeView('Stack5')"
                        class="nav-link"
                        active-class="active"
                        :class="{ active: selectedView === 'Stack5' }"
                        >5-Chart View
                </a >
                </li>
                <li>
                    <a
                    href="#"
                    @click="changeView('SplitView')"
                        to="/chartview"
                        class="nav-link"
                        active-class="active"
                        :class="{ active: selectedView === 'SplitView' }"
                        >Split View
                </a >
                </li>
                <li>
                    <a
                    href="#"
                    @click="changeView('MultiView')"
                        to="/chartview"
                        class="nav-link"
                        active-class="active"
                        :class="{ active: selectedView === 'MultiView' }"
                        >Multi View
                </a>
                </li>



            </ul>

        </div>
    </nav>
</template>

<script>
export default {  props: {
    selectedView: String, // Prop to track the selected view
  },
    data(){
        return{
            theme: 'dark'
        }
    },
    methods: {
        changeView(view) {
      // Emit the selected view
      this.$emit('changeView', view);
    },
        changeTheme() {
            let theme = 'light';
            if (this.theme == 'light') {
                theme = 'dark';
            }
            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme')
            if (theme) {
                this.theme = theme;
            }
        }
    }
            }
</script>
<style scoped>

.nav-link:hover {
    color: #94C12E; /* Change this to your desired hover color */
}

.nav-link.active {
    color: #04BBF1; /* Change this to your desired active color */
}
</style>