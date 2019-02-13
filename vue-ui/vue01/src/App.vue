<template>
    <mt-button type="danger" @click.native="hello">Hello Mint-UI</mt-button>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: 'app',
        components: {},
        methods: {
            hello: function () {
                Toast('This is Mint-UI');
            }
        }
    }
</script>

<style>

</style>
