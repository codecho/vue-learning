<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader></todoHeader>
      <todoList></todoList>
      <todoFooter></todoFooter>
    </div>
  </div>
</template>

<script>
  import todoHeader from './components/TodoHeader.vue'
  import todoList from './components/TodoList.vue'
  import todoFooter from './components/TodoFooter.vue'

  export default {
    name: 'app',
    components: {
      todoHeader,
      todoList,
      todoFooter
    },
    mounted() {
      this.$store.dispatch('readTodos')
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
