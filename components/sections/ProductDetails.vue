<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
    <ProductImageCarouselSection :images="product.images" class="w-full" />

    <div class="space-y-6">
      <h1 class="text-2xl font-bold">{{ product.title }}</h1>
      <p class="text-gray-500">{{ product.description }}</p>

      <div>
        <span class="text-lg text-red-500 font-semibold">Sale: {{ product.price }}</span>
        <span class="line-through text-gray-400 text-sm ml-2">{{ product.originalPrice }}</span>
      </div>

      <p class="text-sm text-gray-600">Arrives by {{ deliveryDate }}</p>

      <div class="flex flex-col sm:flex-row gap-4">
        <QuantitySelector :initialQuantity="quantity" @update:quantity="updateQuantity" class="flex-1" />
        <AddToCartButton :product="product" :quantity="quantity" class="flex-1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const deliveryDate = ref('Sun, Nov 24');
const quantity = ref(1);

const updateQuantity = (newQuantity) => {
  quantity.value = newQuantity;
};
</script>
