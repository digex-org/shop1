<template>
  <section class="container flex items-center justify-center relative py-7 bg-white" >
    <NuxtImg :src="banner" :alt="altText" priority class="inset-0 h-[120px] w-full object-cover" />
  </section>
</template>

<script>
export default {
  props: {
    banner: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: 'Banner image'
    }
  }
}
</script>