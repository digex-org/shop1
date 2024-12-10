<template>
  <section class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <ProductCardSection
          v-for="(product, index) in products"
          :key="index"
          :product="product"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
</style>
