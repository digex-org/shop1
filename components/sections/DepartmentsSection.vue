<template>
  <div :class="className" class="my-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
