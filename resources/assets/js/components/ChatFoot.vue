<template>
    <div class="chat-foot">
        <input type="text" placeholder="" v-model="cont" @keyup.enter="sendmsg">
        <button class="btn btn-primary" @click="sendmsg">发送</button>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              cont:''
          }
        },
        methods:{
            sendmsg:function (){
                this.$emit('msgsend',this.cont);
                this.cont = '';
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
    .chat-foot{
        display: flex;
    }
    .chat-foot input{
        flex: 1 auto;
    }
    .chat-foot button{
        border-radius:0
    }
</style>