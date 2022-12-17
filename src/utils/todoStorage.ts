import type { Todo } from '@/types/todo.type'

export const todosStorage = {
  getTodos: () => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
  },
  setTodos: (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },
}
