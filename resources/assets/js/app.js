require('./bootstrap');


import 'vue-awesome/icons';
import router from './routes';
import Form from './utilities/Form.js';

import Icon from 'vue-awesome/components/Icon';
Vue.component('icon', Icon);


window.Form = Form;
window.bus = new Vue();

Vue.component('home', require('./views/Home.vue'));


const app = new Vue({
    el: '#app',
    router: router
});
