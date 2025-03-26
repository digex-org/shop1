<template>
    <NuxtLink :to="{ name: 'category-category', params: { category: encodeURIComponent(category.name) } }">
        <div class="relative group">
          <img :src="category.image" :alt="category.name" class="category-image w-full h-full object-cover" loading="lazy" />
          <div class="absolute bottom-0 w-full  bg-opacity-50 text-white text-center py-2">
            <p class="text-white text-xl font-semibold" >{{ category.name }}</p>
          </div>
        </div>
  
    </NuxtLink>
  </template>
  
  <script setup>
  defineProps({
    category: {
      type: Object,
      required: true
    }
  });
  
  </script>
  