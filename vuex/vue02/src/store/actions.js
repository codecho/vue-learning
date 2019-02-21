/*
包含多个接收组件通知触发mutation调用间接更新state的方法的对象
 */
import {ADD_TODO, DELETE_TODO, CHECK_ALL_TODOS, DELETE_CHECKED_TODOS, READ_TODOS, SAVE_TODOS} from "./mutation-names";

export default {
  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  checkAllTodos({commit}, checked) {
    commit(CHECK_ALL_TODOS, {checked})
  },

  deleteCheckedTodos({commit}) {
    commit(DELETE_CHECKED_TODOS)
  },

  // 模拟从服务器获取数据
  readTodos({commit}) {
    setTimeout(() => {
      commit(READ_TODOS)
    }, 1000)
  },

  saveTodos({commit}, todos) {
    commit(SAVE_TODOS, {todos})
  }
}
