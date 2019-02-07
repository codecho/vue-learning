<template>
    <div>
        <div class="container">
            <div>
                <li class="list-group-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4  offset-md-10">
                                <button type="button" class="btn btn-danger" @click="deleteCommentItem">删除</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p><span>{{comment.name}}</span><span>:</span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 offset-md-2">
                                <p>{{comment.content}}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentListItem",
        props: {
            comment: Object,
            deleteComment: Function,
            index: Number
        },
        methods: {
            deleteCommentItem: function () {
                const {comment, deleteComment, index} = this;
                if (window.confirm('确认删除用户' + comment.name + '的评论?')) {
                    deleteComment(index);
                    //    this.deleteComment(index);
                }
            }
        }
    }
</script>

<style scoped>

</style>