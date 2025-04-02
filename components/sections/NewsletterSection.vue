<template>
    <section class="container py-12 px-6 bg-white flex items-center justify-center">
      <!-- Constrained Container -->
      <div class="py-6 relative w-full mx-auto">
        <!-- Background Image -->
        <NuxtImg :src="banner"  :alt="altText"  loading="lazy" class="absolute inset-0 w-full h-full object-cover" />

        <!-- Overlay Content -->
        <div class="relative z-10 text-white p-6 ml-20 flex flex-col md:flex-row md:items-center md:space-x-4">
          <!-- Heading -->
          <p class="text-lg md:text-xl lg:text-xl mb-10">
            SIGN UP FOR ACCESS TO NEW STYLE EDITS AND SALES.
          </p>

          <!-- Form & Instructional Text Container -->
          <div class="flex flex-col w-1/2  mt-4 md:mt-0">
            <form class="flex">
              <input 
                type="email" 
                placeholder="DROP YOUR EMAIL HERE" 
                class="w-full  px-4 py-2 focus:outline-none text-gray-700" 
                required
              >
              <button type="submit" class="bg-customYellow hover:bg-orange-600 text-white px-6 py-2 font-semibold">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </form>
            
            <!-- Instructional Text Under the Form -->
            <p class="mt-1">
              Please enter your email address to continue
            </p>
          </div>
        </div>
      </div>
    </section>


</template>
    
<script >
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
    },
  }
</script>
    
