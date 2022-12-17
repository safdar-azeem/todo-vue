<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
export default defineComponent({
  name: 'Input',
  emits: ['onChange'],
  props: {
    value: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },

    slotDirection: {
      type: String,
      default: 'right',
    },
  },

  setup(props, { emit }) {
    const isFocus = ref(false)
    const onFocus = () => (isFocus.value = true)
    const onBlur = () => (isFocus.value = false)

    return {
      isFocus,
      onFocus,
      onBlur,
    }
  },
})
</script>

<template>
  <section>
    <label
      for="{}"
      class="label">
      {{ label }}
    </label>
    <div
      class="input-group"
      :class="{
        focus: isFocus,
        error: error,
      }">
      <div
        v-if="slotDirection === 'left'"
        class="slot">
        <slot></slot>
      </div>
      <input
        ref="input"
        class="input"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        @focus="onFocus"
        @blur="onBlur"
        v-model="value"
        @input="$emit('onChange', $event)" />
      <div
        v-if="slotDirection === 'right'"
        class="slot">
        <slot></slot>
      </div>
    </div>
    <p
      v-if="error"
      class="text-danger mt-2">
      {{ error }}
    </p>
  </section>
</template>
