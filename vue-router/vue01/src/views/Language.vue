<template>
    <div>
        <ul>
            <li v-for="(language,index) in languages" :key="index">{{language}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Language",
        data: function () {
            return {
                languages: [
                    'C', 'C++', 'Java', 'JavaScript', 'Python'
                ]
            }
        }
    }
</script>

<style scoped>

</style>