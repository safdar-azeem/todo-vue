<script lang="ts">
import { defineComponent } from 'vue'
import Input from './components/reusable/Input.vue'
import TodoAddForm from './components/todos/TodoAddForm.vue'
import TodoList from './components/todos/TodoList.vue'
import Header from './components/todos/Header.vue'

export default defineComponent({
  components: { Input, TodoList, TodoAddForm, Header },
})
</script>

<template>
  <section class="md:w-1/2 w-10/12 mx-auto mt-16">
    <Header />
    <TodoList />
    <TodoAddForm />
  </section>
</template>
