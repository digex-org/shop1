<template>
  <div class="flex items-center justify-between space-x-4 mb-3 border-b pb-4">
    <!-- Product Image -->
    <img
        :src="item.image"
        alt="Product Image"
        class="w-16 h-16 rounded-lg object-cover"
    />

    <!-- Product Details -->
    <div class="flex-1">
      <p class="text-sm font-medium mb-2">{{ item.name }}</p>
      <p class="text-sm text-gray-500">{{ item.details }}</p>
    </div>

    <div class="flex flex-col">
      <p class="text-sm font-medium mb-2">${{ item.price }}</p>
      <button
          @click="$emit('removeItem')"
          class="text-sm text-black-500 hover:underline"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
