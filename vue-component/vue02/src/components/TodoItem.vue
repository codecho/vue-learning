<template>
  <li @mouseenter="changeStyle(true)" @mouseleave="changeStyle(false)" :style="{background:color}">
    <label>
      <input type="checkbox" v-model="todo.over"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-if="show" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  // 引入pubsub-js在不同组件中发布和订阅消息
  import PubSub from 'pubsub-js'

  export default {
    name: "TodoItem",
    props: ['todo', 'index', 'deleteTodo'],
    data: function () {
      return {
        color: 'white',
        show: false
      }
    },
    methods: {
      changeStyle: function (status) {
        if (status) {
          this.color = 'grey';
          this.show = true;
        } else {
          this.color = 'white';
          this.show = false;
        }
      },
      deleteItem: function () {
        const {todo, index} = this;
        if (window.confirm(`确认删除${todo.title}任务吗?`)) {
          // this.deleteTodo(index);

          // 使用pubsub-js发布消息
          PubSub.publish('delete', index);
        }
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
