<template>
    <section class="container flex items-center justify-center relative py-12 px-6 bg-white">
      <img :src="banner" alt="banner" loading="lazy" class="inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 flex flex-col justify-center text-center text-white px-6 md:px-20">
        <h2 class="text-4xl lg:text-5xl">Get Discount Up To </h2>
        <h2 class="text-4xl mt-5  lg:text-5xl">50% Off Today!</h2>
      </div>
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