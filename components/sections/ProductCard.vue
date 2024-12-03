<template>
  <div class="product-card relative text-center p-1.5">
    <div>
      <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .product-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent; /* No border initially */
    pointer-events: none;
    transition: border-color 0.3s ease;
  }
  .product-card:hover::after {
    border-color: #363438;
  }
  .product-image {
    width: 100%;
  }

</style>
