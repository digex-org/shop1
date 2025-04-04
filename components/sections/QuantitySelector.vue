<template>
  <div class="flex items-center space-x-2">
    <button
      @click="decreaseQuantity"
      :disabled="quantity <= min"
      aria-label="Decrease quantity"
      class="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
    >
      -
    </button>
    <input
      type="number"
      v-model.number="quantity"
      class="w-12 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      :min="min"
      :max="max"
    />
    <button
      @click="increaseQuantity"
      aria-label="Increase quantity"
      class="p-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  initialQuantity: {
    type: Number,
    default: 1,
  },
  step: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: Infinity,
  },
});

const emit = defineEmits(['update:quantity']);

// Ensure TypeScript knows this is a number
const quantity = ref<number>(props.initialQuantity);

watch(quantity, (newVal) => {
  emit('update:quantity', newVal);
});

const increaseQuantity = () => {
  if (quantity.value < props.max) {
    quantity.value += props.step;
  }
};

const decreaseQuantity = () => {
  if (quantity.value > props.min) {
    quantity.value -= props.step;
  }
};
</script>

<style scoped>
/* Additional focus styles for accessibility can be added here */
</style>
