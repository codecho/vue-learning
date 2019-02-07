<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--通过子组件的props接收父组件传递的方法-->
      <!--<todoHeader :addTodo="addTodo"></todoHeader>-->
      <!--通过@event=""绑定自定义事件到子组件-->
      <!--<todoHeader @addTodo="addTodo"></todoHeader>-->
      <!--通过 vm.$on( event, callback ) 绑定自定义事件到子组件-->
      <todoHeader ref="header"></todoHeader>
      <!--<todoList :todos="todos" :deleteTodo="deleteTodo"></todoList>-->
      <todoList :todos="todos" :deleteTodo="deleteTodo"></todoList>
      <todoFooter :todos="todos" :checkAllTodos="checkAllTodos" :deleteCheckedTodos="deleteCheckedTodos"></todoFooter>
    </div>
  </div>
</template>

<script>
  // 引入pubsubjs在不同组件中发布和订阅消息
  import PubSub from 'pubsub-js'

  import todoHeader from './components/TodoHeader.vue'
  import todoList from './components/TodoList.vue'
  import todoFooter from './components/TodoFooter.vue'

  export default {
    name: 'app',

    mounted() {
      // 通过 vm.$on( event, callback ) 绑定自定义事件
      this.$refs.header.$on('addTodo', this.addTodo);

      // 使用pubsub-js订阅消息
      PubSub.subscribe('delete', (msg, index) => {
        this.deleteTodo(index);
      });
    },
    components: {
      todoHeader,
      todoList,
      todoFooter
    },
    data: function () {
      return {
        // 从localStorage中读取todos，如果todos为空，则返回一个空数组
        todos: JSON.parse(window.localStorage.getItem('todos') || '[]')
      }
    },
    watch: {
      // 通过侦听器相应todos变化
      todos: {
        // 为了发现对象内部值的变化，可以在选项参数中指定 deep: true
        deep: true,
        handler(newValue, oldValue) {
          // 将todos保存到localStorage
          window.localStorage.setItem('todos', JSON.stringify(newValue));
        }
      }
    },
    methods: {
      addTodo: function (todo) {
        this.todos.unshift(todo);
      },
      deleteTodo: function (index) {
        this.todos.splice(index, 1);
      },
      checkAllTodos: function (isAllCheck) {
        this.todos.forEach(t => t.over = isAllCheck);
      },
      deleteCheckedTodos: function () {
        // this.todos = this.todos.filter(t => t.over === false);
        this.todos = this.todos.filter(function (t) {
          return t.over === false;
        });
      }
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
