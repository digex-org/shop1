<template>
  <div class="container mx-auto py-8">
    <!-- Selected Categories -->
    <h1 v-if="selectedCategoryNames.length" class="text-sm text-gray-600 mb-5 ml-2">
      Selected Categories: <span class="font-semibold">{{ selectedCategoryNames }}</span>
    </h1>

    <button
        @click="toggleFilters"
        class="flex items-center justify-center gap-2 mb-4 p-2 border border-gray-300 rounded-md hover:bg-gray-100 ml-2"
    >
      <i class="fa-solid fa-sliders"></i>
      {{ showFilters ? "Hide Filters" : "Show Filters" }}
    </button>

    <div class="flex flex-col lg:flex-row relative">
      <transition name="slide">
        <FiltersSection
            v-if="showFilters"
            @update-filters="onFilterUpdate"
            class="absolute z-10 bg-white shadow-lg p-4 w-full lg:relative lg:shadow-none lg:w-1/4 lg:block"
        />
      </transition>

      <!-- Product Grid Section -->
      <div :class="{'w-full': !showFilters, 'lg:w-3/4': showFilters}" class="p-4">
        <ProductGridSection :products="filteredProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProduct } from '~/composables/useProduct';
const showFilters = ref(false); // Default to hidden on mobile for better UX
const filters = ref({
  fastDelivery: false,
  categories: [],
});

const { products } = useProduct();

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesCategory =
        filters.value.categories.length === 0 || filters.value.categories.includes(product.category);
    const matchesDelivery = !filters.value.fastDelivery || true;
    return matchesCategory && matchesDelivery;
  });
});

const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

const onFilterUpdate = (updatedFilters) => {
  filters.value = updatedFilters;
};

const selectedCategoryNames = computed(() => {
  return filters.value.categories.length > 0
      ? filters.value.categories.join(', ')
      : 'None';
});
</script>

<style scoped>
/* Slide-in animation for filters */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
