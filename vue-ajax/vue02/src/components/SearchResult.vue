<template>
    <div class="row">
        <h2 v-if="first">输入要查询的内容</h2>
        <h2 v-if="loading">正在查询......</h2>
        <h2 v-if="errorMsg">{{errorMsg}}</h2>
        <div class="card" v-for="(user,index) in users" :key="index">
            <a :href="user.url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.name}}</p>
        </div>
    </div>
</template>

<script>
    import PubSub from 'pubsub-js'
    import axios from 'axios'

    export default {
        name: "SearchResult",
        data: function () {
            return {
                first: true,
                loading: false,
                users: null,
                errorMsg: ''
            }
        },
        mounted() {
            // 注意这里提前使用变量保存 this
            var _this = this;

            PubSub.subscribe('search', function (msg, searchName) {

                _this.first = false;
                _this.loading = true;
                _this.users = null;
                _this.errorMsg = '';

                axios.get(`https://api.github.com/search/users?q=${searchName}`)
                    .then(function (response) {
                        const users = response.data.items.map(function (item) {
                            return {
                                url: item.html_url,
                                avatar_url: item.avatar_url,
                                name: item.login
                            }
                        });
                        _this.loading = false;
                        _this.users = users;
                    }).catch(function (error) {
                    _this.loading = false;
                    _this.errorMsg = '请求失败'
                })
            })
        }
    }
</script>

<style>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>