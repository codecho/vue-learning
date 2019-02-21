/*
包含所有state状态的getter计算属性的对象
 */

export default {
  countOverTodos(state) {
    return state.todos.reduce((total, todo) => total + (todo.over ? 1 : 0), 0);
  },

  checkAll(state, getters) {
    return getters.countOverTodos === state.todos.length && state.todos.length > 0
  }
}
