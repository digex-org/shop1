<template>
  <section>
    <nav class="border-b">
      <!-- Responsive Wrapper -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Hamburger Menu (Mobile) -->
        <div class="flex justify-between items-center py-4 lg:hidden">
          <span class="text-xl font-bold text-gray-800">Menu</span>
          <button @click="isOpen = !isOpen" class="text-gray-800 focus:outline-none">
            <svg
                v-if="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
                v-if="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <div
            :class="[
            'flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 lg:space-x-4 py-2 text-sm font-semibold text-gray-800',
            isOpen ? 'block' : 'hidden lg:flex',
          ]"
        >
          <a
              v-for="(link, index) in links"
              :key="index"
              :href="link.href"
              :class="[
              'hover:text-gray-600',
              link.active ? 'text-red-500 font-semibold hover:text-red-600' : '',
            ]"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state for menu visibility
const isOpen = ref(false);

// Navigation links
const links = [
  { label: 'New', href: '#', active: false },
  { label: 'Furniture', href: '#', active: false },
  { label: 'Outdoor', href: '#', active: false },
  { label: 'Lighting', href: '#', active: false },
  { label: 'Decor & Pillows', href: '#', active: false },
  { label: 'Wall Decor & Mirrors', href: '#', active: false },
  { label: 'Rugs', href: '#', active: false },
  { label: 'Bedding', href: '#', active: false },
  { label: 'Bath', href: '#', active: false },
  { label: 'Kitchen & Tabletop', href: '#', active: false },
  { label: 'Storage', href: '#', active: false },
  { label: 'Holiday', href: '#', active: false },
  { label: 'Inspiration', href: '#', active: false },
  { label: 'Sale', href: '#', active: true },
];
</script>

<style scoped>
</style>
