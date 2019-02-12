<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="searchName"/>
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
    import PubSub from 'pubsub-js'

    export default {
        name: "Search",
        data: function () {
            return {
                searchName: ''
            }
        },
        methods: {
            search: function () {
                const searchName = this.searchName.trim();
                PubSub.publish('search', searchName);
            }
        }
    }
</script>

<style>

</style>