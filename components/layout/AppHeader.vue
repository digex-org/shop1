<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Top Bar -->
    <div class="bg-customGreen text-white text-sm flex justify-between px-6 py-2">
      <div>Free shipping on all orders!</div>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:text-gray-400">Sign In</a>
        <span class="h-4 border-l border-gray-400"></span>
        <a href="#" class="hover:text-gray-400">Track Order</a>
        <span class="h-4 border-l border-gray-400"></span>
        <a href="#" class="hover:text-gray-400">Help</a>
      </div>
    </div>

    <!-- Main Header -->
    <div class="container mx-auto flex items-center px-6 py-4">
      <!-- Left: Logo -->
      <div class="flex-1">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
          ROSSA & THE STONE
        </NuxtLink>
      </div>

      <!-- Center: Search Bar -->
      <div class="flex-1 hidden lg:flex items-center justify-center">
        <div class="relative w-full max-w-md">
          <span class="absolute left-3 top-2 text-gray-400">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search for deals, products, and more..."
            class="w-full border border-gray-300  py-2 pl-10 pr-4 text-gray-600 text-sm focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500"
            aria-label="Search"
          />
        </div>
      </div>

      <!-- Right: Icons -->
      <div class="flex-1 flex items-center justify-end space-x-6">
        <NuxtLink to="/signUp">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <i class="fas fa-user text-gray-700"></i>
          </button>
        </NuxtLink>
        <NuxtLink to="/basket">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <i class="fas fa-shopping-cart text-gray-700"></i>
          </button>
        </NuxtLink>
        <NuxtLink to="/">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <i class="fa-solid fa-heart"></i>
          </button>
        </NuxtLink>
      </div>
    </div>


  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
