<template>
  <button
    @click="addToCart"
    :disabled="isAdding"
    class="bg-black text-white px-4 py-2 hover:bg-gray-800 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray-600"
    aria-label="Add product to cart"
  >
    Add to Cart
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCart } from '~/composables/useCart';

// Define a Product interface for better type safety.
interface Product {
  id: number;
  title: string;
  images: string[];
  // ... add other properties as needed, such as price, description, etc.
}

// Type props for the component
const props = defineProps<{
  product: Product;
  quantity: number;
}>();

const { addItem } = useCart();
const isAdding = ref(false);

const addToCart = async () => {
  isAdding.value = true;
  try {
    // Ensure there is at least one image available
    const image = props.product.images && props.product.images.length > 0 
      ? props.product.images[0] 
      : '';
    await addItem({ ...props.product, quantity: props.quantity, image });
  } catch (error) {
    console.error('Error adding to cart:', error);
  } finally {
    isAdding.value = false;
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>

