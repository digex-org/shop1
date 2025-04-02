<template>
  <NuxtLink :to="{ name: 'category-category', params: { category: encodeURIComponent(category.name) } }">
      <div class="relative group w-[172px] h-[262px]">
        <NuxtImg :src="category.image" :alt="category.name" class="category-image w-full h-full object-cover"  />
        <div class="absolute bottom-0 w-full  bg-opacity-50 text-white text-center py-2">
          <p>{{ category.name }}</p>
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


