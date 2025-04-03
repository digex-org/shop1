<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TwoCategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNewCategory } from "~/composables/useNewCategory";
// Use new category data from composable
const { categories } = useNewCategory();


</script>
