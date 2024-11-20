<template>
  <div class="p-4 rounded-lg">
    <!-- Order Summary Header -->
    <div class="flex justify-between items-center border-b pb-2 mb-4">
      <h2 class="font-medium text-lg">Order Summary ({{ totalItems }})</h2>
      <button @click="toggleSummary">
        <i :class="`fas fa-chevron-${isExpanded ? 'up' : 'down'}`"></i>
      </button>
    </div>

    <!-- Order Items -->
    <div v-if="isExpanded" class="space-y-4">
      <OrderItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @removeItem="handleRemoveItem(item.id)"
      />
    </div>

    <div class="totals mb-4 border-b pb-2">
      <div class="flex justify-between align-baseline mb-2">
        <p>Item Subtotal:(${{ totalItems }}) </p>
        <p> ${{ itemSubtotal.toFixed(2) }}</p>
      </div>

      <div class="flex justify-between align-baseline mb-2">
        <p>Delivery:</p>
        <p> ${{ deliveryFee.toFixed(2) }}</p>
      </div>

      <div class="flex justify-between align-baseline mb-2">
        <p>Estimated Tax:</p>
        <p> ${{ estimatedTax.toFixed(2) }}</p>
      </div>

    </div>
    <div class="flex justify-between align-baseline mb-2">
      <h4 class="font-bold text-lg">Total</h4>
      <p class="font-bold text-lg">${{ total }}</p>
    </div>
    <div class="flex justify-between align-baseline mb-2">
      <h4>You save: </h4>
      <p>${{ savings }}</p>
    </div>

  </div>
</template>


<script setup>
import { useCart } from "~/composables/useCart";

const { cartItems, deliveryFee, totalItems, itemSubtotal, estimatedTax, total, savings, removeItem } = useCart();

const handleRemoveItem = (id) => {
  removeItem(id);
};
const isExpanded = ref(true);
const toggleSummary = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
