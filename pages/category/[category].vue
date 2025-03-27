<template>
  <main class="container mx-auto py-8">
    <!-- SEO Meta Tags for the category page are set in the script -->
    
    <!-- Controls: Selected Categories and Filter Toggle -->
    <div class="flex justify-between items-baseline">
      <div class="flex flex-col">
        <h1 v-if="selectedCategoryNames.length" class="text-sm text-gray-600 mb-5 ml-2">
          Selected Categories: <span class="font-semibold">{{ selectedCategoryNames }}</span>
        </h1>
        <button
          @click="toggleFilters"
          :aria-expanded="showFilters"
          aria-controls="filter-panel"
          class="flex items-center justify-center gap-2 mb-4 p-2 border border-gray-300 rounded-md hover:bg-gray-100 ml-2"
        >
          <i class="fa-solid fa-sliders" aria-hidden="true"></i>
          <span>{{ showFilters ? "Hide Filters" : "Show Filters" }}</span>
        </button>
      </div>

      <!-- Sort By Dropdown -->
      <SortByDropdown @update-sort="onSortUpdate" />
    </div>

    <div class="flex flex-col lg:flex-row relative">
      <!-- Filters Section: Using v-if with a transition -->
      <transition name="slide">
        <FiltersSection
          v-if="showFilters"
          id="filter-panel"
          v-model:filters="appliedFilters"
          class="absolute z-10 bg-white shadow-lg p-4 w-full lg:relative lg:shadow-none lg:w-1/4 lg:block"
        />
      </transition>

      <!-- Product Grid Section -->
      <div :class="{ 'w-full': !showFilters, 'lg:w-3/4': showFilters }" class="p-4">
        <ProductGridSection :products="sortedProducts" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHead } from '#imports';
import { useProduct } from '~/composables/useProduct';

// Define the Filters interface
interface Filters {
  categories: string[];
  colors: string[];
  priceRanges: string[];
  delivery: string[];
}

// Set up dynamic SEO meta tags for this category page
useHead({
  title: 'Category - Elegant Furniture For Best Homes',
  meta: [
    { name: 'description', content: 'Browse our curated selection of elegant furniture categories.' },
    // Open Graph tags
    { property: 'og:title', content: 'Category - Elegant Furniture' },
    { property: 'og:description', content: 'Browse our curated selection of elegant furniture categories.' },
    { property: 'og:type', content: 'website' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Category - Elegant Furniture' },
    { name: 'twitter:description', content: 'Browse our curated selection of elegant furniture categories.' },
  ]
});

// Reactive state for filters and sorting
const showFilters = ref(false);
const selectedSortOption = ref('recommended');
const appliedFilters = ref<Filters>({
  categories: [],
  colors: [],
  priceRanges: [],
  delivery: [],
});

const { products } = useProduct();

// Compute filtered products based on applied filters
const filteredProducts = computed(() => {
  return products.filter(product => {
    let passesFilter = true;
    // Category filter
    if (appliedFilters.value.categories.length > 0) {
      passesFilter = passesFilter && appliedFilters.value.categories.includes(product.category);
    }
    // Color filter
    if (appliedFilters.value.colors.length > 0) {
      passesFilter = passesFilter && appliedFilters.value.colors.some((color: string) =>
        color.trim().toLowerCase() === (product.color || '').trim().toLowerCase()
      );
    }
    // Price range filter
    if (appliedFilters.value.priceRanges.length > 0) {
      passesFilter = passesFilter && appliedFilters.value.priceRanges.some(range => {
        if (range === 'under-50') return product.price < 50;
        if (range === '50-100') return product.price >= 50 && product.price <= 100;
        if (range === 'above-100') return product.price > 100;
        return false;
      });
    }
    // Delivery filter (example: fast-delivery)
    if (appliedFilters.value.delivery.length > 0) {
      passesFilter = passesFilter && (appliedFilters.value.delivery.includes('fast-delivery')
        ? product.isLimitedTime
        : true);
    }
    return passesFilter;
  });
});

// Compute sorted products based on the selected sort option
const sortedProducts = computed(() => {
  let sorted = [...filteredProducts.value];
  switch (selectedSortOption.value) {
    case 'recommended':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'newArrivals':
      sorted.sort((a, b) => b.id - a.id);
      break;
    case 'priceLowToHigh':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'priceHighToLow':
      sorted.sort((a, b) => b.price - a.price);
      break;
  }
  return sorted;
});

// Toggle filter panel visibility
const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

// Handler for when FiltersSection emits an update event
const onFilterUpdate = (updatedFilters: Filters) => {
  appliedFilters.value = updatedFilters;
};

// Handler for sort update from SortByDropdown
const onSortUpdate = (newSortOption: string) => {
  selectedSortOption.value = newSortOption;
};

// Compute selected category names for display
const selectedCategoryNames = computed(() => {
  return appliedFilters.value.categories.length > 0
    ? appliedFilters.value.categories.join(', ')
    : 'None';
});
</script>

<style scoped>
/* Slide-in animation for the filter panel */
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
