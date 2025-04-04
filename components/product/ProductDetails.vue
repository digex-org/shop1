<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
    <!-- Product Image Carousel Section -->
    <ProductImageCarouselSection :images="product.images" class="w-full" />
    
    <!-- Product Details -->
    <div class="space-y-6">
      <!-- Use h2 if your layout already uses h1 for the page title -->
      <h2 class="text-2xl font-bold">{{ product.title }}</h2>
      <p class="text-gray-500">{{ product.description }}</p>
      <div class="flex items-center mt-1">
        <div class="flex space-x-1">
          <span
            v-for="n in 5"
            :key="n"
            class="relative inline-block w-5 h-5"
          >
            <!-- Base (empty) star -->
            <font-awesome-icon
              :icon="['fas', 'star']"
              class="w-full h-full text-gray-400"
            />
            <!-- Yellow overlay star, always rendered with dynamic width -->
            <span
              class="absolute inset-0 overflow-hidden "
              :style="{ width: getStarFill(n) }"
            >
              <font-awesome-icon
                :icon="['fas', 'star']"
                class="w-full h-full"
              />
            </span>
          </span>
        </div>
        <span class="ml-2 text-sm text-gray-500">
          ({{ product.rating ? product.rating.toFixed(2) : '0.00' }})
        </span>
      </div>
 
      <!-- Pricing -->
      <div>
        <span class="text-lg text-red-500 font-semibold">Sale: ${{ product.price }}</span>
        <span  v-if="product.originalPrice" class="line-through text-sm ml-2">${{ product.originalPrice }}</span>
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
  color?: string;
  rating?: number;
  category?: string;
  // Add other fields as needed: rating, category, etc.
}

const props = defineProps<{ product: Product }>();

import { ref } from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


const deliveryDate = ref('Sun, Nov 24');
const quantity = ref(1);

const updateQuantity = (newQuantity: number) => {
  quantity.value = newQuantity;
};
const getStarFill = (starIndex: number): string => {
  const rating = props.product.rating || 0;
  if (rating >= starIndex) {
    return "100%";
  }
  if (rating < starIndex - 1) {
    return "0%";
  }
  // For a partial star: calculate the fractional fill
  return `${(rating - (starIndex - 1)) * 100}%`;
};
</script>

<style scoped>
/* Add any additional component-specific styles here */
</style>
