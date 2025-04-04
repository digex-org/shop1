<template>
  <main class="container m-auto py-8">
    <!-- Conditionally render product details or a fallback -->
    <template v-if="product">
      <ProductDetails class="my-7" :product="product" />
      <ProductDescriptionSection class="mb-7" />
      <SectionTitle :title="'We Think You’ll Love'" />
      <ProductGridSection :products="relatedProducts" class-name="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
    </template>
    <template v-else>
      <p class="text-center text-gray-600">Product not found.</p>
    </template>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useHead } from '#imports';
import { useProduct } from '~/composables/useProduct';

interface Product {
  id: number;
  rating: number;
  price: number;
  category: string;
  color?: string;
  description?: string;
  // ...other properties
}

const { products } = useProduct();

// Get the current route
const route = useRoute();

// Compute the current product using route parameter (assumes route.params.product is a string)
const product = computed<Product | null>(() => {
  const id = parseInt(route.params.product as string, 10);
  return products.find((p: Product) => p.id === id) || null;
});

// Set dynamic SEO using product data if available
useHead({
  title: product.value ? product.value.name : 'Product Not Found',
  meta: [
    { name: 'description', content: product.value ? product.value.description || '' : 'This product could not be found.' },
    { property: 'og:title', content: product.value ? product.value.name : 'Product Not Found' },
    { property: 'og:description', content: product.value ? product.value.description || '' : '' },
    { property: 'og:type', content: 'product' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: product.value ? product.value.name : 'Product Not Found' },
    { name: 'twitter:description', content: product.value ? product.value.description || '' : '' }
  ]
});

// Compute related products (exclude the current product)
const relatedProducts = computed(() =>
  products.filter((p: Product) => p.id !== (product.value ? product.value.id : 0))
);
</script>

<style scoped>
/* Add any additional styles for the product page if needed */
</style>
