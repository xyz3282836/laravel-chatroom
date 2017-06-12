
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chat-body', require('./components/ChatBody.vue'));
Vue.component('chat-foot', require('./components/ChatFoot.vue'));
Vue.component('chat-head', require('./components/ChatHead.vue'));
Vue.component('chat-part', require('./components/ChatPart.vue'));


const app = new Vue({
    el: '#app',
    data:{
        users:0,
        messages:[]
    },
    methods:{
        addMsg:function (msg) {
            axios.post('msgpost',{msg:msg}).then(response=>{

            })
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            axios.get('msg').then(response => {
                this.messages = response.data
            });
        });

        Echo.join('roomone')
            .here((users)=>{
                console.log(users)
                this.users = users
            })
            .joining((user)=>{
                console.log(user)
                this.users.push(user)
            })
            .leaving((user)=>{
                console.log(user)
                this.users = this.users.filter(u=>u!=user)
            })
            .listen('MessagePost', (e) => {
                this.messages.push({
                    content:e.message.content,
                    user:e.user
                })
            });
    }
});
