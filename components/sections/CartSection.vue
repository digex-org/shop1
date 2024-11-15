<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header with Back to Shopping Link -->
    <div class="text-sm mb-4">
      <a href="#" class="text-gray-600 hover:underline">← Back To Shopping</a>
    </div>
    <div v-if="products.length === 0" class="flex justify-start">
      <EmptyCart />
    </div>
    <!-- Main Cart Layout -->
    <div v-else class="flex flex-col md:flex-row">
      <!-- Cart Items Section -->
      <div class="w-full lg:w-3/4 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 class="text-2xl font-semibold mb-6">My Cart</h1>

          <CartItem v-for="product in products" :key="product.sku" :product="product" />
          <div class="mt-8">
          <h3 class="text-lg font-semibold mb-2">30-Day Returns</h3>
          <p class="text-sm text-gray-600">Not loving it? We offer returns for most items within 30 days of delivery for a refund or store credit. <a href="#" class="text-gray-500 hover:underline">Learn More</a></p>
        </div>
      </div>

      <div class="w-full lg:w-1/4">
        <div class="border p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Order Summary ({{ products.length }})</h2>
          <p class="text-sm text-green-600 mb-2">This order qualifies for Free Shipping!</p>
          <div class="flex justify-between text-gray-600 mb-2">
            <span>Item Subtotal ({{ products.length }})</span>
            <span>${{ itemSubtotal }}</span>
          </div>
          <div class="flex justify-between text-gray-600 mb-2">
            <span>Deliver to Saint Louis - 63122</span>
            <span>FREE</span>
          </div>
          <div class="flex justify-between text-gray-600 mb-4">
            <span>Estimated Tax</span>
            <span>${{ estimatedTax }}</span>
          </div>
          <hr class="mb-4" />
          <div class="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span>${{ total }}</span>
          </div>
          <p class="text-sm text-gray-500 mb-4">You Save ${{ totalSavings }}</p>
          <button class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Proceed to Checkout</button>
        </div>

        <!-- Payment Options -->
        <div class="mt-6 p-4 border rounded-lg">
          <p class="text-sm text-gray-600">Pay in 4 interest-free payments of ${{ (total / 4).toFixed(2) }} with Klarna or Afterpay.</p>
          <img src="/images/product.webp" alt="Payment Options" class="mt-4 w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const products = ref([
  {
    sku: 'J001131826',
    name: 'Warrenton Single Light LED Flush Mount',
    image: '/images/product.webp',
    limitedTime: true,
    price: 63.00,
    originalPrice: 80.00,
    size: '0.75" H 11" W x 11" D',
    finish: 'Black',
    quantity: 1,
  },
  {
    sku: 'J001131826',
    name: 'Warrenton Single Light LED Flush Mount',
    image: '/images/product.webp',
    limitedTime: true,
    price: 63.00,
    originalPrice: 80.00,
    size: '0.75" H 11" W x 11" D',
    finish: 'Black',
    quantity: 1,
  },
  {
    sku: 'J001131826',
    name: 'Warrenton Single Light LED Flush Mount',
    image: '/images/product.webp',
    limitedTime: true,
    price: 63.00,
    originalPrice: 80.00,
    size: '0.75" H 11" W x 11" D',
    finish: 'Black',
    quantity: 1,
  },
]);

// Computed properties for order summary
const itemSubtotal = computed(() =>
    products.value.reduce((sum, product) => sum + product.price * product.quantity, 0)
);
const estimatedTax = computed(() => itemSubtotal.value * 0.057);
const total = computed(() => itemSubtotal.value + estimatedTax.value);
const totalSavings = computed(() =>
    products.value.reduce((sum, product) => sum + (product.originalPrice - product.price) * product.quantity, 0)
);

</script>

<style scoped>
</style>
