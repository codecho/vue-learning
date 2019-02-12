<template>
    <div id="id">
        <div class="container">
            <search></search>
            <searchResult></searchResult>
        </div>
    </div>
</template>

<script>
    import search from './components/Search.vue'
    import searchResult from './components/SearchResult.vue'

    export default {
        name: 'app',
        components: {
            search,
            searchResult
        }
    }
</script>

<style>
</style>
