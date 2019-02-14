<template>
    <div>
        <ul>
            <li v-for="company in companies" :key="company.id">
                <router-link :to="`/home/company/info/${company.id}`">{{company.name}}</router-link>
                <button @click="push(company.id)" class="btn btn-default">router.push</button>
                <button @click="replace(company.id)" class="btn btn-primary">router.replace</button>
            </li>
        </ul>
        <button @click="$router.back()" class="btn btn-primary">router.back</button>
        <button @click="$router.go(1)" class="btn btn-default">router.go</button>

        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Company",
        data: function () {
            return {
                companies: []
            }
        },
        mounted() {
            // 模拟从后台获取数据
            setTimeout(() => {
                this.companies = [
                    {
                        id: 1,
                        name: '阿里巴巴'
                    },
                    {
                        id: 2,
                        name: '腾讯'
                    },
                    {
                        id: 3,
                        name: '百度'
                    },
                    {
                        id: 4,
                        name: '字节跳动'
                    }
                ]
            }, 1000);
        },
        methods: {
            push: function (id) {
                this.$router.push(`/home/company/info/${id}`);
            },
            replace: function (id) {
                this.$router.replace(`/home/company/info/${id}`);
            }
        }
    }
</script>

<style scoped>

</style>