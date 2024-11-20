<template>
  <div class="container m-auto">
    <div class="flex justify-between  flex-col lg:flex-row gap-8 p-4">
      <div class="w-full lg:w-2/3">
        <ShippingAddressForm />
      </div>

      <div class="w-full lg:w-1/3 border p-4">
        <OrderSummary
            :items="cartItems"
        />
      </div>
    </div>

    <div class="mt-8 p-4">
      <ReturnPolicy />
    </div>
  </div>
</template>

<script setup>

import { useCart } from '~/composables/useCart'
const { cartItems } = useCart()

</script>

<style scoped>
</style>
