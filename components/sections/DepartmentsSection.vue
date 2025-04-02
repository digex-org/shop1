<template>
  <section  class="container  px-4 my-8 flex flex-wrap justify-center gap-4">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </section>
</template>

<script setup>

import {useCategory} from "~/composables/useCategory.js";

const { categories } = useCategory();

</script>


