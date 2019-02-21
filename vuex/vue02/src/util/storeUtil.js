/*
保存和读取todos数据
 */
const todos_key = 'todos'
export default {
  readTodos() {
    // 从localStorage中读取todos，如果todos为空，则返回一个空数组
    return JSON.parse(localStorage.getItem(todos_key || '[]'))
  },
  saveTodos(todos) {
    localStorage.setItem(todos_key,JSON.stringify(todos))
  }
}
