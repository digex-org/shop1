<!-- components/layout/MainMenu.vue -->
<template>
  <nav class="bg-white relative" @mouseleave="clearActiveMenu">
    <!-- Horizontal Navigation Bar -->
    <div class="w-full bg-white hidden md:flex">
      <div class="max-w-[1440px] mx-auto h-16 flex items-center px-4">
        <ul class="flex justify-center space-x-8 w-full">
          <li
            v-for="menu in menus"
            :key="menu.id"
            class="relative"
            @mouseenter="setActiveMenu(menu)"
          >
            <NuxtLink
              :to="menu.url"
              class="font-medium text-gray-800 text-lg hover:text-winered"
            >
              {{ menu.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Mega Menu Dropdown -->
    <transition name="fade">
      <div
        v-if="activeMenu && activeMenu.subMenu && activeMenu.subMenu.length"
        class="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg z-20 w-[calc(80vw-32px)] max-w-[1200px] min-w-[800px]"
        @mouseenter="keepMenuOpen"
        @mouseleave="clearActiveMenu"
      >
        <div class="py-2 grid grid-cols-4 gap-x-4 min-h-[400px] px-1">
          <!-- Columns 1-3: Sub-menu Groups -->
          <div
            v-for="(group, index) in activeMenu.subMenu.slice(0, 3)"
            :key="index"
            class="space-y-2"
          >
            <!-- Group Header with Arrow -->
            <div class="flex items-center px-4 py-2">
              <h4 class="text-xl font-bold text-gray-800">
                {{ group.name }}
              </h4>
              <svg
                class="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <!-- List of Subcategories -->
            <ul class="px-4 space-y-2">
              <li
                v-for="(item, idx) in group.subMenu"
                :key="idx"
              >
                <NuxtLink
                  :to="item.url"
                  class="text-base text-gray-600 hover:text-winered"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>

            <div v-if="index === 0" class="px-4">
              <NuxtLink
              :to="activeMenu.texturl" 
            class="text-black text-sm font-bold hover:underline"
          > 
            {{ activeMenu.text }}   &rarr;
              </NuxtLink>
            </div>
          </div>
          <!-- Column 4: Visual Element -->
          <div class="hidden lg:flex flex-col items-center justify-start px-4">
            <img
              :src="activeMenu.image"
              :alt="activeMenu.name"
              class="w-[360px] h-[280px] object-cover rounded"
            />
            <p class="mt-2 text-sm text-gray-600 text-center">
              Explore our curated collection
            </p>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useMainMenu } from '~/composables/useMainMenu';

const { menus } = useMainMenu();
const activeMenu = ref(null);

const setActiveMenu = (menu) => {
  activeMenu.value = menu;
};

const clearActiveMenu = () => {
  activeMenu.value = null;
};

const keepMenuOpen = () => {
  // This handler keeps the mega menu open while hovering over it.
};
</script>

<style scoped>
/* Fade transition for the mega menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
