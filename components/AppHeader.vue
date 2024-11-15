<template>
  <header class="flex justify-between items-center border-b p-4">
    <!-- Search Section -->
    <div class="space-x-2">
      <!-- Search Icon on Small Screens -->
      <button class="p-2 rounded-full hover:bg-gray-100 md:hidden">
        <i class="fas fa-search text-gray-700"></i>
      </button>
      <!-- Search Input on Medium and Larger Screens -->
      <input
          type="text"
          placeholder="Search"
          class="hidden md:inline-flex outline-none border-b border-gray-300 focus:border-gray-500 px-2"
      />
    </div>

    <!-- Logo Section -->
    <div class="text-center">
      <NuxtLink to="/">
        <h1 class="font-serif text-lg tracking-widest border px-4 py-1">
          JOSS & MAIN
        </h1>
      </NuxtLink>
    </div>

    <!-- Icons Section -->
    <div class="flex space-x-4 items-center">
      <button class="p-2 rounded-full hover:bg-gray-100">
        <i class="fas fa-user text-gray-700"></i>
      </button>
      <NuxtLink to="/basket">
        <button class="p-2 rounded-full hover:bg-gray-100">
          <i class="fas fa-shopping-cart text-gray-700"></i>
        </button>
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
</style>
