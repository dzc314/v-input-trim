import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import inputTrim from "@/directive/input-trim.js";
Vue.use(inputTrim);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
