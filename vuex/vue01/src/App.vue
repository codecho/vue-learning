<template>
    <div>
        <p>点击次数: {{$store.state.count}} , 点击次数是: {{odd_even}}</p>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseIfOdd">点击次数为奇数+1</button>
        <button @click="increaseAsync">点击次数+1（异步）</button>
    </div>
</template>

<script>

    export default {
        name: 'app',
        computed: {
            odd_even() {
                return this.$store.getters.odd_even
            }
        },
        methods: {
            increase() {
                this.$store.dispatch('increase')
            },
            decrease() {
                this.$store.dispatch('decrease')
            },
            increaseIfOdd() {
                this.$store.dispatch('increaseIfOdd')
            },
            increaseAsync() {
                this.$store.dispatch('increaseAsync')
            }
        }
    }
</script>

<style>

</style>
