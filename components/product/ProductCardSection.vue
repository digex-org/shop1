<template>
  <NuxtLink :to="{ name: 'product-product', params: { product: product.id } }" class="block">
    <article class="group relative bg-white border overflow-hidden  hover:shadow-xl transition-transform duration-300">
      <!-- Use NuxtImg for image optimization -->
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <div class="p-4">
        <h3 class="font-medium text-base md:text-lg">{{ product.title }}</h3>
        <p class="text-lg font-semibold text-gray-800 mt-2">${{ product.price }}</p>
        <div class="flex items-center mt-2">
          <!-- Star rating with aria-label for accessibility -->
          <span class="text-gray-500" aria-hidden="true">&#9733;</span>
          <span class="ml-1 text-gray-500 text-sm" aria-label="Rating">{{ product.rating }}</span>
        </div>
        <!-- Limited Time Badge -->
        <div
          v-if="product.isLimitedTime"
          class="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-sm font-semibold py-1 px-2 "
        >
          Limited Time Only
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
/**
 * Define a Product interface for type safety.
 */
interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  rating: number;
  isLimitedTime?: boolean;
  // Additional fields if necessary.
}

const props = defineProps<{ product: Product }>();
</script>

<style scoped>
/* Custom hover effects can be added if needed, but Tailwind utilities are already handling most cases. */
</style>
