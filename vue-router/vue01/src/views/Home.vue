<template>
    <div>
        <p>Home</p>
        <ul class="nav">
            <li>
                <router-link to="/home/language">编程语言</router-link>
                <router-link to="/home/company">互联网公司</router-link>
            </li>
        </ul>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>