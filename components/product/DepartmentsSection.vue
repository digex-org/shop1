<template>
  <section  class="container flex flex-wrap justify-center gap-8">
    <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
  </section>
</template>

<script setup>

import {useCategory} from "~/composables/useCategory.js";

const { categories } = useCategory();

</script>


