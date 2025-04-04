<template>
  <h2 :class="['px-2 text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4', className]">
    <slot>{{ title }}</slot>
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});
</script>
