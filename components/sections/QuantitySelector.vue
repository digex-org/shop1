<template>
  <div class="flex items-center space-x-2">
    <button
        @click="decreaseQuantity"
        :disabled="quantity <= 1"
        class="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
    >
      -
    </button>
    <input
        type="number"
        v-model="quantity"
        class="w-12 text-center border rounded"
        min="1"
    />
    <button
        @click="increaseQuantity"
        class="p-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      +
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  initialQuantity: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['update:quantity']);
const quantity = ref(props.initialQuantity);

watch(quantity, (newVal) => {
  emit('update:quantity', newVal);
});

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>
