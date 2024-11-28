<template>
  <div class="container m-auto">
    <ProductDetails class="my-7" :product="product" />
    <ProductDescriptionSection class="mb-7" />
    <SectionTitle :title="'We Think You’ll Love'" />
    <DepartmentsSection :products="products" class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
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
const products = [
  { id: '1', image: '/images/product.webp' },
  { id: '2',image: '/images/product.webp' },
  { id: '3', image: '/images/product.webp' },
  { id: '4', image: '/images/product.webp' },
  { id: '5', image: '/images/product.webp' },
];
</script>
