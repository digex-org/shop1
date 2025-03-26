<template>
  <section
    class="relative bg-cover bg-center flex items-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4 h-full">
      <div class="flex-grow mb-6 lg:mb-0 lg:w-2/3">
        <!-- Left content (optional) -->
      </div>
      <div class="flex justify-center lg:justify-end w-full lg:w-1/3">
        <a href="#" class="bg-lemonlime text-black font-semibold px-6 py-2">
          SHOP NOW
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import defaultImage from '~/assets/images/backgrounds/home-2.jpg';

defineProps({
  backgroundImage: {
    type: String,
    default: defaultImage,
  },
});
</script>