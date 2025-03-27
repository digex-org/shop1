<template>
  <section class="p-4 bg-gray-50">
    <div v-for="(filter, filterIndex) in filtersData" :key="filterIndex" class="mb-6">
      <h4 class="font-semibold mb-4 py-4 border-b">{{ filter.label }}</h4>
      <ul>
        <li v-for="(option, optionIndex) in filter.options" :key="optionIndex" class="mb-2">
          <div v-if="filter.type === 'checkbox'">
            <input
              type="checkbox"
              :id="`${filter.key}-${option.value}`"
              :value="option.value"
              v-model="localFilters[filter.key]"
              class="mr-2"
            />
            <label :for="`${filter.key}-${option.value}`" class="text-sm lg:text-base">
              {{ option.label }}
            </label>
          </div>
          <!-- If you have toggle types, implement similarly -->
          <div v-else-if="filter.type === 'toggle'" class="flex items-center">
            <label class="flex items-center cursor-pointer" :for="`${filter.key}-${option.value}`">
              <span
                class="relative w-12 h-[30px] bg-gray-300 rounded-full shadow-inner border mr-3"
                :class="localFilters[filter.key].includes(option.value) ? '!bg-gray-950' : '!bg-white'"
              >
                <span
                  class="absolute w-6 h-6 bg-gray-700 rounded-full shadow transform transition-transform top-0.5 left-0.5"
                  :class="localFilters[filter.key].includes(option.value) ? '!translate-x-4 !bg-white' : '!translate-x-0'"
                ></span>
              </span>
              <span class="mr-3 text-sm lg:text-base">{{ option.label }}</span>
              <input
                type="checkbox"
                class="sr-only"
                :id="`${filter.key}-${option.value}`"
                v-model="localFilters[filter.key]"
                :value="option.value"
              />
            </label>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

// Assume useFilters provides a structure of available filters.
import { useFilters } from '~/composables/useFilters';

// Get available filters from a composable (or define them locally if static)
const { filters } = useFilters();

// Create a local copy of selected filters that is controlled by v-model.
// We expect the parent to bind to the `filters` prop (via v-model:filters)
const props = defineProps({
  filters: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['update:filters']);

// localFilters acts as a proxy to the parent's filters.
const localFilters = computed({
  get() {
    return props.filters;
  },
  set(newVal) {
    emit('update:filters', newVal);
  }
});

// For the purpose of this example, we assume filters is an array of filter groups,
// each with a key, label, type, and an array of options.
const filtersData = filters;
</script>

<style scoped>
/* Slide-in animation for Filters Section */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
