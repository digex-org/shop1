<template>
  <div class="container m-auto">
    <ProductDetails class="my-7" :product="product" />
  </div>
</template>

<script setup>

const product = {
  name: 'Gwennie 24" Metal Wall Clock',
  images: [
    '/images/product.webp',
    '/images/product.webp',
    '/images/product.webp',
  ],
  description: 'A stylish wall clock for your living room.',
  price: 85,
  originalPrice: 99,
};
</script>
