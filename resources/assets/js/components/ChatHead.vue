<template>
    <div class="panel-heading">chatroom <span class="badge pull-right" v-text="usersnumber.length"></span></div>
</template>

<script>
    export default {
        props:['usersnumber'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>