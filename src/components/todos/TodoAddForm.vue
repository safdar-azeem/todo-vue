<script lang="ts">
import { useTodoStore } from '@/stores/todo'
import { mapActions, mapState } from 'pinia'
import { defineComponent } from 'vue'
import type { Todo } from '../../types/todo.type'
import Button from '../reusable/Button.vue'
import Input from '../reusable/Input.vue'

export default defineComponent({
  name: 'TodoAddForm',
  computed: {
    ...mapState(useTodoStore, ['editedTodo']),
  },
  components: { Input, Button },
  data() {
    return {
      value: '',
      error: '',
    }
  },
  watch: {
    editedTodo: {
      handler: function (newValue) {
        this.value = newValue.text
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useTodoStore, ['addTodo']),
    handleChange(newValue: Event) {
      this.value = (newValue.target as HTMLInputElement).value
      this.error = ''
    },
    handleAddTodo() {
      if (!this.value) return (this.error = 'Please enter a todo')
      const newTodo: Todo = {
        id: new Date().getTime(),
        text: this.value,
        isCompleted: false,
      }
      this.addTodo(newTodo)
      this.value = ''
    },
  },
})
</script>

<template>
  <form
    @submit.prevent="handleAddTodo"
    class="sticky bottom-2 bg-white">
    <Input
      placeholder="Add new todo"
      :value="value"
      @onChange="handleChange"
      :error="error">
      <Button
        text="Add"
        variant="primary"
        radius="rounded-none rounded-tr"
        type="submit" />
    </Input>
  </form>
</template>
