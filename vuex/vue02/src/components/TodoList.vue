<template>
  <ul class="todo-main">
    <todoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></todoItem>
  </ul>
</template>

<script>
  import todoItem from './TodoItem.vue'
  import {mapState} from 'vuex'

  export default {
    name: "TodoList",
    computed: {
      ...mapState([
        'todos'
      ])
    },
    watch: {
      // 通过侦听器相应todos变化
      todos: {
        // 为了发现对象内部值的变化，可以在选项参数中指定 deep: true
        deep: true,
        handler(newValue, oldValue) {
          // 将todos保存到localStorage
          this.$store.dispatch('saveTodos', newValue)
        }
      }
    },
    components: {
      todoItem
    }
  }

</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
