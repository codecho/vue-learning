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
    // 引入   mapState、mapGetters、mapActions
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'app',
        computed: {
            // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
            ...mapState([
                // 映射 this.count 为 store.state.count
                'count'
            ]),
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'odd_even'
            ]),
            // odd_even() {
            //     return this.$store.getters.odd_even
            // }
        },
        methods: {
            ...mapActions([
                'increase',
                'decrease',
                'increaseIfOdd',
                'increaseAsync'
            ]),
            // ...mapActions({
            //     add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
            // })
            // increase() {
            //     this.$store.dispatch('increase')
            // },
            // decrease() {
            //     this.$store.dispatch('decrease')
            // },
            // increaseIfOdd() {
            //     this.$store.dispatch('increaseIfOdd')
            // },
            // increaseAsync() {
            //     this.$store.dispatch('increaseAsync')
            // }
        }
    }
</script>

<style>

</style>
