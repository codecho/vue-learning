<template>
    <div>
        <div>
            <h2>{{msg}}</h2>
            <p>About</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>