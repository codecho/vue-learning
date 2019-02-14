<template>
    <div>
        <ul>
            <li v-for="company in companies" :key="company.id">
                <router-link :to="`/home/company/info/${company.id}`">{{company.name}}</router-link>
            </li>
        </ul>

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
        }
    }
</script>

<style scoped>

</style>