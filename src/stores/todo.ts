import type { Todo } from '@/types/todo.type'
import { defineStore } from 'pinia'
import { todosStorage } from '@/utils/todoStorage'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: (todosStorage.getTodos() || []) as Todo[],
    editedTodo: {} as Todo,
  }),

  actions: {
    addTodo(todo: Todo) {
      if (this.editedTodo.id) {
        this.todos = this.todos.map((t: Todo) => (t.id === this.editedTodo.id ? todo : t))
        this.editedTodo = {} as Todo
      } else {
        this.todos.push(todo)
      }
      todosStorage.setTodos(this.todos)
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
      todosStorage.setTodos(this.todos)
    },
    setEditedTodo(id: number) {
      this.editedTodo = this.todos.find((todo: Todo) => todo.id === id) as Todo
    },
  },
})
