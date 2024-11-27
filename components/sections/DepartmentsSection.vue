<template>
  <section :class="className" class="my-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

defineProps({
  products: {
    type: Array,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
</style>
