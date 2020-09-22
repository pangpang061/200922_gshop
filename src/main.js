
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router // 结果：1.多几个组件标签(router-link,router-view,keepalive)// 2.多两个属性可以访问：$router/$route
})
