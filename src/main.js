import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from './router'; // 导入router变量
import store from './store'

axios.defaults.baseURL = 'http://localhost:8088'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
   router, // 传递router变量
   store
}).$mount('#app')
