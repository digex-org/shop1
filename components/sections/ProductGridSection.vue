<template>
  <section class="p-4">
    <div v-if="products.length === 0" class="text-center text-gray-500">
      No products match your filters.
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <ProductCardSection
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
</style>
