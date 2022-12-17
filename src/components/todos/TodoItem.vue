<script lang="ts">
import { useTodoStore } from '@/stores/todo'
import { mapActions } from 'pinia'
import { defineComponent } from 'vue'
import Button from '../reusable/Button.vue'
import EmptyState from './EmptyState.vue'

export default defineComponent({
  name: 'TodoItem',
  components: { Button, EmptyState },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(useTodoStore, ['removeTodo', 'setEditedTodo']),
  },
})
</script>

<template>
  <li
    class="todo-list-item fadeIn"
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
</template>
