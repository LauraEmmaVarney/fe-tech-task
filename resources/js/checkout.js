require('./app');

import Vue from "vue";
import App from "./components/App";
import 'es6-promise/auto'

import VueAxios from 'vue-axios';
import axios from 'axios';
import vSelect from 'vue-select'
import VueSweetalert2 from 'vue-sweetalert2';
import BootstrapVue from 'bootstrap-vue';

import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2, { confirmButtonColor: '#105fbd' });
Vue.use(BootstrapVue);

Vue.component('v-select', vSelect)

new Vue({
    el: '#app',
    render: createElement => createElement(App)
});
