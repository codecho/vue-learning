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

  export default {
    name: "TodoItem",
    props: [
      'todo',
      'index'
    ],
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
      deleteItem() {
        const {todo, index} = this;
        if (window.confirm(`确认删除${todo.title}任务吗?`)) {
          this.$store.dispatch('deleteTodo', index)
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
