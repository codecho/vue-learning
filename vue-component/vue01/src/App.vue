<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12" align="center">
                    <h2>你最喜欢英雄联盟中哪个英雄</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <addComment :addComment="addComment"></addComment>
            <!--将数据传递给子组件-->
            <commentList :comments="comments" :deleteComment="deleteComment"></commentList>
        </div>
    </div>
</template>

<script>
    import addComment from './components/AddComment.vue'
    import commentList from './components/CommentList.vue'

    export default {
        name: "App",
        components: {
            addComment,
            commentList
        },
        data: function () {
            return {
                comments: [
                    {name: '小明', content: '疾风剑豪-亚索'},
                    {name: '小花', content: '迅捷斥候-提莫'},
                    {name: '小健', content: '放逐之刃-瑞雯'},
                    {name: '小林', content: '光辉女郎-拉克丝'}
                ]
            }
        },
        methods: {
            addComment: function (comment) {
                this.comments.unshift(comment);
            },
            deleteComment: function (index) {
                this.comments.splice(index,1);
            }
        }
    }
</script>

<style scoped>

</style>