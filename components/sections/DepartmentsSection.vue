<template>
  <section :class="className" class="container  px-4 my-8">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </section>
</template>

<script setup>

import {useCategory} from "~/composables/useCategory.js";

const { categories } = useCategory();
defineProps({
  className: {
    type: String,
    required: true,
  },
});
</script>


