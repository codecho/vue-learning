<template>
    <div>
        <div class="col-md-4 offset-md-4">
            <h1>Hello Vue!</h1>
        </div>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <div class="container">
            <div class="row">
                <div class="list-group">
                    <router-link to="/home" class="list-group-item">Home</router-link>
                    <router-link to="/about" class="list-group-item">About</router-link>
                </div>
                <div class="col-md-4">
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->


    </div>
</template>

<script>

    export default {
        name: 'App'
    }
</script>

<style>

</style>
