<template>
<section>
  <img :src="banner" alt="banner" loading="lazy">
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