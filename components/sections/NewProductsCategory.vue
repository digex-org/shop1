<template>
    <section class="container mx-auto px-4 my-8">
        <div :class="className" class="grid grid-cols-1 md:grid-cols-2 gap-4">
         <TwoCategoryCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
    </section>    
  </template>
  
  <script setup>
  
  import {useNewCategory} from "~/composables/useNewCategory.js";
  
  const { categories } = useNewCategory();
  defineProps({
    className: {
      type: String,
      required: true,
    },
  });
  </script>