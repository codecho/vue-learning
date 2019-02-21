/*
包含多个由action触发直接更新state的方法的对象
 */
import {ADD_TODO, DELETE_TODO, CHECK_ALL_TODOS, DELETE_CHECKED_TODOS, READ_TODOS, SAVE_TODOS} from "./mutation-names";
import storeUtil from '../util/storeUtil'

export default {
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },

  [CHECK_ALL_TODOS](state, {checked}) {
    state.todos.forEach(todo => todo.over = checked)
  },

  [DELETE_CHECKED_TODOS](state) {
    state.todos = state.todos.filter(todo => !todo.over)
  },

  [READ_TODOS](state) {
    state.todos = storeUtil.readTodos()
  },

  [SAVE_TODOS]({todos}) {
    storeUtil.saveTodos(todos)
  }
}
