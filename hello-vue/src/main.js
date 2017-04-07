import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'
import App from './App.vue'
import Index from './compontent/index.vue'
import axios from 'axios'
import $ from 'jquery'

Vue.use(VueRouter)
Vue.use(axios)
//axios.defaults.baseURL = 'http://localhost:3000';
Vue.prototype.$http  = axios;
const  router = new VueRouter({
  mode: 'history',
  routes:routers
})
new Vue({
  router,
  axios
}).$mount('#app');



//
//created:function(){
//  this.$http.get('http://192.168.1.10/oa/menu/getList',{params:{name:user.name,pwd:user.pwd}}).then(response => {
//    console.log(response);
//  }, response => {
//    console.log(response);
//  })
//},
