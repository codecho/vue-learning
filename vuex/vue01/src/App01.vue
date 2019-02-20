<template>
    <div>
        <p>点击次数: {{count}} , 点击次数是: {{odd_even}}</p>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="increaseIfodd">点击次数为奇数+1</button>
        <button @click="increaseAsync">点击次数+1（异步）</button>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                count: 0
            }
        },
        computed: {
            odd_even() {
                return this.count % 2 === 0 ? '偶数' : '奇数'
            }
        },
        methods: {
            increase() {
                this.count = this.count + 1;
            },
            decrease() {
                this.count = this.count - 1;
            },
            increaseIfodd() {
                if (this.count % 2 !== 0) {
                    this.count = this.count + 1;
                }
            },
            increaseAsync() {
                setTimeout(() => {
                    this.count = this.count + 1;
                }, 1000)
            }
        }
    }
</script>

<style>

</style>
