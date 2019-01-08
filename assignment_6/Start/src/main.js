import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import Footer from './Footer.vue'

Vue.component('Header', Header);
Vue.component('Footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
