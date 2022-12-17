<script lang="ts">
import { useTodoStore } from '@/stores/todo'
import { mapActions, mapState } from 'pinia'
import { defineComponent } from 'vue'
import Button from '../reusable/Button.vue'
import EmptyState from './EmptyState.vue'

export default defineComponent({
  name: 'TodoList',
  components: { Button, EmptyState },
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
      <li
        class="todo-list-item fadeIn"
        v-for="todo in todos"
        :key="todo.id">
        <span>{{ todo.text }}</span>
        <aside class="flex gap-1">
          <Button
            icon="mdi:edit"
            variant="transparent"
            size="md"
            radius="rounded-full"
            @click="setEditedTodo(todo.id)" />
          <Button
            icon="mdi:trash"
            variant="transparent"
            size="md"
            radius="rounded-full"
            @click="removeTodo(todo.id)" />
        </aside>
      </li>
    </ul>
    <EmptyState v-else />
  </section>
</template>
