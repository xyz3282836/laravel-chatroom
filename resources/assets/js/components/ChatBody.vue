<template>
    <div class="chat-body">
        <chat-part v-for="message in messages" :message="message"></chat-part>
    </div>
</template>

<script>
    export default {
        props:['messages'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style>
    .chat-body .chat-part:nth-child(even){
        background-color: #ccc;
    }
</style>