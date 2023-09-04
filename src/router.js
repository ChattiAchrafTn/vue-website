import { createRouter , createWebHistory} from 'vue-router'
import DatasetPageVue from './components/DatasetPage.vue'
import ClassesPageVue from './components/ClassesPage.vue'
import NotificationsPageVue from './components/NotificationsPage2.vue'
import LoginPageVue from './components/LoginPage.vue'
import MainPageVue from './components/MainPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'LoginPageVue',
        component: LoginPageVue,
      },
      {
        path: '/Dataset',
        name: 'DatasetPageVue',
        component: DatasetPageVue
      },      
      {
        path: '/Main',
        name: 'MainPageVue',
        component: MainPageVue
      },
      {
        path: '/Classes',
        name: 'ClassesPageVue',
        component: ClassesPageVue,
      },
      {
        path: '/Notifications',
        name: 'NotificationsPageVue',
        component: NotificationsPageVue,
      },
    ]
  })
  
  export default router
  