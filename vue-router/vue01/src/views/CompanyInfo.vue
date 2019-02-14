<template>
    <div>
        <p>id:{{$route.params.id}}</p>

        <ul>
            <li>{{company.name}}</li>
            <li>{{company.website}}</li>
        </ul>
    </div>
</template>

<script>

    const companyArray = [
        {
            id: 1,
            name: '阿里巴巴',
            website: 'www.alibaba.com'
        },
        {
            id: 2,
            name: '腾讯',
            website: 'www.tencent.com'
        },
        {
            id: 3,
            name: '百度',
            website: 'www.baidu.com'
        },
        {
            id: 4,
            name: '字节跳动',
            website: 'www.bytedance.com'
        }
    ];

    export default {
        name: "CompanyInfo",
        data: function () {
            return {
                company: {}
            }
        },
        mounted() {
            // 注意这里从url传来的id可能是string类型
            const id = this.$route.params.id * 1;
            this.company = companyArray.find(c => c.id === id);
            console.log(this.company);
        },
        // 
        watch: {
            $route: function () {
                const id = this.$route.params.id * 1;
                this.company = companyArray.find(c => c.id === id);
            }
        }
    }
</script>

<style scoped>

</style>