<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'Button',
  emits: ['onClick'],
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    radius: {
      type: String,
      default: '',
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconDirection: {
      type: String,
      default: 'left',
    },
  },
  setup() {},
})
</script>

<template>
  <button
    class="btn"
    :class="{
      [`${variant}`]: variant,
      [`${size}`]: size,
      [`${radius}`]: radius,
      'full-width': isFullWidth,
      loading: isLoading,
      'btn-icon': !text && icon,
    }"
    :disabled="isDisabled"
    @click="$emit('onClick')">
    <span>
      <Icon
        v-if="icon && iconDirection === 'left'"
        :icon="icon" />
    </span>
    <span>{{ text }}</span>
    <span>
      <Icon
        v-if="icon && iconDirection === 'right'"
        :icon="icon" />
    </span>
  </button>
</template>
