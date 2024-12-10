<template>
  <section class="p-4 bg-gray-50 lg:block">
    <!-- Category Filter -->
    <div>
      <h4 class="font-semibold mb-4 py-4 border-b">Category</h4>
      <ul>
        <li v-for="(category, index) in categories" :key="index" class="mb-2">
          <input
              type="checkbox"
              v-model="selectedCategories"
              :value="category.name"
              :id="'category-' + category.id"
              class="mr-2 opacity-0"
              name="category"
          />
          <label
              :for="'category-' + category.id"
              class="text-sm lg:text-base"
          >{{ category.name }}</label>
        </li>
      </ul>
      <h4 class="font-semibold mb-4 py-4 border-b">Filters</h4>
    </div>
  </section>
</template>

<script setup>
import { useCategory } from '~/composables/useCategory';

const selectedCategories = ref([]);
const { categories } = useCategory();

const emit = defineEmits(["update-filters"]);

watch([selectedCategories], () => {
  emit("update-filters", {
    categories: selectedCategories.value,
  });
});
</script>

<style scoped>
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
