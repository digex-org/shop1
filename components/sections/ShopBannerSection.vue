<template>
  <section
      class="relative flex items-center justify-center bg-cover bg-center h-[500px] lg:h-[600px]"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
  >    <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
    <div class="relative z-10 max-w-screen-xl px-8 py-16 text-white md:py-24 lg:px-16">
      <h2 class="text-4xl font-bold lg:text-5xl">Blakes Seating Collection</h2>
      <p class="mt-4 text-lg lg:text-xl">Sleek, cushy, and available in performance fabric. We're obsessed.</p>
      <button class="mt-8 px-6 py-3 font-semibold bg-green-400 text-gray-800 rounded hover:bg-green-500">
        Shop The Collection
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      backgroundImage: {
        type: String
      }
    }
  }
</script>
