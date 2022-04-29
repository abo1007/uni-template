import App from './App'

import apiList from "./util/apiList.js"
import store from "./util/store.js"
import req from "./util/request.js"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$apiList = apiList;
Vue.prototype.$store = store;
Vue.prototype.$baseUrl = req.baseUrl;
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif