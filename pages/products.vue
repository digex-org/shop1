<template>
  <div class="container mx-auto py-8">
    <div v-if="selectedCategoryNames.length" class="text-sm text-gray-600 mb-5">
      Selected Categories: <span class="font-semibold">{{ selectedCategoryNames }}</span>
    </div>
    <button
        @click="toggleFilters"
        class="flex items-center justify-center gap-2 mb-4 p-2 border border-gray-300 rounded-md hover:bg-gray-100"
    >
      <i class="fa-solid fa-sliders"></i>
      {{ showFilters ? "Hide Filters" : "Show Filters" }}
    </button>

    <div class="flex relative">
      <!-- Filters Section -->
      <transition name="slide">
        <FiltersSection
            v-if="showFilters"
            @update-filters="onFilterUpdate"
            class="absolute z-10 bg-white shadow-lg p-4 lg:relative lg:shadow-none lg:w-1/4"
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
import { ref } from 'vue';

const showFilters = ref(true);
const filters = ref({
  fastDelivery: false,
  categories: [],
});

const products = ref([
  {
    image: '/images/product.webp',
    title: 'Gwennie 24" Metal Wall Clock',
    price: '$85',
    rating: '4.5/5',
    isLimitedTime: true,
    category: 'Wall Clocks',
  },
  {
    image: '/images/product.webp',
    title: 'Lowri 30.22" Wood Wall Clock',
    price: '$79',
    rating: '4.7/5',
    isLimitedTime: false,
    category: 'Wall Clocks',
  },
  {
    image: '/images/product.webp',
    title: 'Tillie 2.1" Wood Wall Clock',
    price: '$75',
    rating: '4.3/5',
    isLimitedTime: true,
    category: 'Wall Decor',
  },
]);

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
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

<style>

</style>
