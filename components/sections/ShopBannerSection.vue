<template>
  <section class="relative flex items-center justify-center bg-cover bg-center"  :style="{ backgroundImage: `url(${backgroundImage})` }"> 
    
    <div class=" text-center relative z-10  items-center px-8 py-16 text-white md:py-24 lg:px-16">
      <h2 class="text-4xl lg:text-5xl">Get Discount Up To </h2>
      <h2 class="text-4xl mt-5  lg:text-5xl">50% Off Today!</h2>
    </div>
  </section>
</template>

<script setup>
defineProps ({
  backgroundImage: {
    type: String
  }
});
</script>
