<template>
<div>
  <img :src="banner" alt="banner">
</div>
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