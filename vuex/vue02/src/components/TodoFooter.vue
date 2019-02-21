<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成{{countOverTodos}}/全部{{todos.length}}</span>
    </span>
    <button class="btn btn-danger" v-if="countOverTodos" @click="deleteCheckedTodos">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: "TodoFooter",
    computed: {
      ...mapState([
        'todos'
      ]),

      ...mapGetters([
        'countOverTodos'
      ]),

      // 使用computed计算属性检查是否全选/全不选
      checkAll: {
        get: function () {
          // 如果勾选的任务数和总任务数相等则表示全选
          return this.$store.getters.checkAll
        },
        set: function (checked) {
          // 通过全选/全不选按钮的勾选状态来判断是否全选
          this.$store.dispatch('checkAllTodos', checked)
        }
      }
    },
    methods: {
      ...mapActions([
        'deleteCheckedTodos'
      ])
    }
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
