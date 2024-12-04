<template>
  <section :class="className" class="my-5">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
