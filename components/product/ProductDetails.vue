<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
    <!-- Product Image Carousel Section -->
    <ProductImageCarouselSection :images="product.images" class="w-full" />
    
    <!-- Product Details -->
    <div class="space-y-6">
      <!-- Use h2 if your layout already uses h1 for the page title -->
      <h2 class="text-2xl font-bold">{{ product.title }}</h2>
      <p class="text-gray-500">{{ product.description }}</p>
      
      <!-- Pricing -->
      <div>
        <span class="text-lg text-red-500 font-semibold">Sale: ${{ product.price }}</span>
        <span class="line-through text-gray-400 text-sm ml-2">${{ product.originalPrice }}</span>
      </div>
      
      <!-- Delivery Date -->
      <p class="text-sm text-gray-600">Arrives by {{ deliveryDate }}</p>
      
      <!-- Quantity Selector and Add to Cart Button -->
      <div class="flex flex-col sm:flex-row gap-4">
        <QuantitySelector 
          :initialQuantity="quantity" 
          @update:quantity="updateQuantity" 
          class="flex-1"
        />
        <AddToCartButton 
          :product="product" 
          :quantity="quantity" 
          class="flex-1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define a Product interface for better type safety.
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  images: string[];
  // Add other fields as needed: rating, category, etc.
}

const props = defineProps<{ product: Product }>();

import { ref } from 'vue';

const deliveryDate = ref('Sun, Nov 24');
const quantity = ref(1);

const updateQuantity = (newQuantity: number) => {
  quantity.value = newQuantity;
};
</script>

<style scoped>
/* Add any additional component-specific styles here */
</style>
