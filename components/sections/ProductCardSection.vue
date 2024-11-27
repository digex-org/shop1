<template>
  <section
      class="group relative bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300"
  >
    <img
        :src="product.image"
        alt="Product Image"
        class="w-full h-48 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
    />
    <div class="p-4">
      <h3 class="font-medium text-base md:text-lg">{{ product.title }}</h3>
      <p class="text-lg font-semibold text-gray-800 mt-2">{{ product.price }}</p>
      <div class="flex items-center mt-2">
        <span class="text-yellow-500">&#9733;</span>
        <span class="ml-1 text-gray-500 text-sm">{{ product.rating }}</span>
      </div>
      <div
          v-if="product.isLimitedTime"
          class="absolute top-2 right-2 bg-red-500 text-white text-xs md:text-sm font-semibold py-1 px-2 rounded-full"
      >
        Limited Time Only
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:shadow-xl {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
