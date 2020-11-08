require('./bootstrap');
// Vue
window.Vue = require('vue')
import VueRouter from 'vue-router';
Vue.use(VueRouter);

<<<<<<< HEAD
// Vue Form
import {Form, HasError, AlertError} from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

=======
>>>>>>> 60adf38a0171549a240b394cb6bde936696ce49c
// Componets
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Users from './components/Users'

let routes = [{
    path: '/dashboard',
    component: Dashboard
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/users',
    component: Users
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// Vue.component('exmaple-component', require('./components/ExampleComponents.vue'));

const app = new Vue({
    el: '#app',
    router
});

export default app
