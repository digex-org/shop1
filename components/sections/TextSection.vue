<!-- components/sections/TextSection.vue -->
<template>
    <section class="bg-white px-4 text-center">
      <div class="container mx-auto">
        <h2 class="text-xl md:text-4xl ">
          {{ title }}
        </h2>
        <a :href="linkUrl"  class="mt-4 inline-block text-2xl font-serif font-medium hover:underline" >
          {{ linkText }}
        </a>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: '100+ New Arrivals Just Dropped'
    },
    linkText: {
      type: String,
      default: 'Shop all'
    },
    linkUrl: {
      type: String,
      default: '/category/New'
    }
  });
  </script>
  
  <style scoped>
  /* Add any additional custom styles if needed */
  </style>
  