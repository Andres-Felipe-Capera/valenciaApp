import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import header from './components/header.vue'
//import Nino from './components/nino.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import Insertar from './components/insertar.vue'
Vue.config.productionTip = false
Vue.use(Router)
const routes=[
  {path:'/home', component:Home},
  {path:'/header', component:header},
  //{path:'/estudiantes', component:Nino},
  {path:'/', component:Home},
  {path:'*', component:ErrorComponent},
  {path:'/insertar',component:Insertar},
];
const router=new Router({
  routes,
  mode:"history",
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
