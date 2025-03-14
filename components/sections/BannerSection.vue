<template>
<section class="container flex items-center justify-center relative py-12 px-6 bg-white">
  <img :src="banner" alt="banner" loading="lazy" class="inset-0 w-full h-full object-cover">
</section>
</template>

<script>
  export default {
    props: {
      banner: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>