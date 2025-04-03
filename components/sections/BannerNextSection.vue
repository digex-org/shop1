<template>
  <section class="container relative bg-white">
    <NuxtImg
      :src="banner"
      :alt="altText"
      priority
      class="inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-20">
      <h2 class="text-4xl lg:text-5xl">Get Discount Up To</h2>
      <h2 class="text-4xl mt-5 lg:text-5xl">50% Off Today!</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    banner: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'Banner image'
    }
  }
}
</script>

    
