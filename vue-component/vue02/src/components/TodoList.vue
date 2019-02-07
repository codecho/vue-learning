<template>
  <ul class="todo-main">
    <todoItem v-for="(todo,index) in todos" :deleteTodo="deleteTodo" :key="index" :todo="todo" :index="index"></todoItem>
  </ul>
</template>

<script>
  import todoItem from './TodoItem.vue'

  export default {
    name: "TodoList",
    props: ['todos','deleteTodo'],
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
