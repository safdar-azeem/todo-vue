<script lang="ts">
import { useTodoStore } from '@/stores/todo'
import { mapActions, mapState } from 'pinia'
import { defineComponent } from 'vue'
import Button from '../reusable/Button.vue'
import EmptyState from './EmptyState.vue'
import TodoItem from './TodoItem.vue'

export default defineComponent({
  name: 'TodoList',
  components: { Button, EmptyState, TodoItem },
  computed: {
    ...mapState(useTodoStore, ['todos']),
  },
  methods: {
    ...mapActions(useTodoStore, ['removeTodo', 'setEditedTodo']),
  },
})
</script>

<template>
  <section class="mb-10">
    <ul
      class="todo-list"
      v-if="todos.length">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" />
    </ul>
    <EmptyState v-else />
  </section>
</template>
