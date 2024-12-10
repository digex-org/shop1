<template>
  <h2 class="px-2 text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-4">
    {{ title }}
  </h2>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>