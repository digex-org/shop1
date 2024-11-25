<template>
  <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>