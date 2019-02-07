<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>{{msg}}</h4>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="col-md-12">
                <p v-if="comments.length===0">快去抢沙发吧</p>
                <ul class="list-group">
                    <commentListItem v-for="(comment,index) in comments" :key="index"
                                     :comment="comment" :deleteComment="deleteComment" :index="index"></commentListItem>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import commentListItem from './CommentListItem.vue'

    export default {
        name: "CommentList",
        components: {
            commentListItem
        },
        // 接收从父组件传递的数据
        props: ['comments', 'deleteComment'],
        data: function () {
            return {
                msg: '显示评论'
            }
        }
    }
</script>

<style scoped>

</style>