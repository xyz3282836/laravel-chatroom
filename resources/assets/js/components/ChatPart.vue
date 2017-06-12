<template>
    <div class="chat-part">
        <p v-text="message.content"></p>
        <small v-text="message.user.name"></small>
    </div>
</template>

<script>
    export default {
        props:['message'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style>
    .chat-part{
        padding:1rem;
    }
    .chat-part>p{
        margin-bottom: .5rem;
    }
</style>