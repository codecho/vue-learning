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
                <form style="margin-left: 10px;">
                    <div class="form-group row" style="margin-top: 20px;">
                        <label for="addComponentName" class="col-form-label"
                               style="width:100px;text-align: center;">输入用户名:</label>
                        <div class="col-sm-4">
                            <input type="text" id="addComponentName" class="form-control" placeholder="输入用户名"
                                   v-model="commentName">
                        </div>
                    </div>
                    <div class="form-group row" style="margin-top: 20px;">
                        <label for="addComponentContent" class="col-form-label"
                               style="width:100px;text-align: center;">输入评论内容:</label>
                        <div class="col-sm-4">
                            <input type="text" id="addComponentContent" class="form-control" placeholder="输入评论内容"
                                   v-model="commentContent">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-primary" id="commentBtn" @click="addCommentItem">评论
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddComment",
        props: {
            addComment: {
                type: Function,
                required: true
            }
        },
        data: function () {
            return {
                msg: '添加评论',
                commentName: '',
                commentContent: ''
            }
        },
        methods: {
            addCommentItem: function () {
                // 先校验数据
                const name = this.commentName.trim();
                const content = this.commentContent.trim();
                if (name === '' || content === '') {
                    alert('请输入姓名或评论');
                    return;
                }
                // 封装数据
                const comment = {name, content};
                // 调用方法添加评论
                this.addComment(comment);
                // 清除输入
                this.commentName = '';
                this.commentContent = '';
            }
        }
    }
</script>

<style scoped>

</style>