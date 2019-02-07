<template>
    <div>
        <div v-if="!repository">{{loadMsg}}</div>
        <div v-else>the most popular repository is <a :href="repositoryUrl">{{repository}}</a></div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'app',
        data: function () {
            return {
                loadMsg: 'loading',
                repository: '',
                repositoryUrl: ''
            }
        },
        mounted: function () {
            var _this = this;
            axios.get(`https://api.github.com/search/repositories?q=vu&sort=stars`)
                .then(function (response) {
                    const result = response.data;
                    _this.repository = result.items[0].name;
                    _this.repositoryUrl = result.items[0].html_url;

                    // function中的this不是vue的实例，需要在函数外部创建变量存储vue的实例；如果使用箭头函数，箭头函数中的this已经由上下文确定了

                    // this.repository = result.items[0].name;
                    // this.repositoryUrl = result.items[0].html_url;
                })
                .catch(function (error) {
                    console.log(error);
                    // alert('request error');
                })
        }
    }
</script>

<style>
</style>
