<template>
  <section class="p-4">
    <!-- Fallback message when no products match the filters -->
    <div v-if="products.length === 0" class="text-center text-gray-500">
      No products match your filters.
    </div>
    <!-- Responsive Product Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <ProductCardSection
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Define a TypeScript interface for Product for better type safety.
 */
interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  isLimitedTime?: boolean;
  category?: string;
  color?: string;
  images?: string[];
  image?: string;
  // Add any additional properties as needed
}

const props = defineProps<{ products: Product[] }>();
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
