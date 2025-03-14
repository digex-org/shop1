<!-- components/layout/MainMenu.vue -->
<template>
  <nav class="bg-white shadow relative">
    <!-- Horizontal Navigation Bar -->
    <div class="w-full bg-white">
      <div class="max-w-[1440px] mx-auto h-16 flex items-center px-4">
        <ul class="flex justify-center space-x-8 w-full">
          <li
            v-for="menu in menus"
            :key="menu.id"
            class="relative"
            @mouseenter="setActiveMenu(menu)"
            @mouseleave="clearActiveMenu"
          >
            <NuxtLink
              :to="menu.url"
              class="font-medium text-gray-800 text-lg hover:text-blue-600"
            >
              {{ menu.name }}
            </NuxtLink>
            
            <!-- Mega Menu Dropdown inside the same li -->
            <transition name="fade">
              <div
                v-if="activeMenu && activeMenu.id === menu.id && activeMenu.subMenu && activeMenu.subMenu.length"
                class="absolute left-0 top-full w-full bg-white shadow-lg z-20"
              >
                <div class="max-w-[1440px] mx-auto py-6 grid grid-cols-4 gap-x-6 min-h-[400px] px-4">
                  <!-- Columns 1-3: Sub-menu Groups -->
                  <div
                    v-for="(group, index) in activeMenu.subMenu.slice(0, 3)"
                    :key="index"
                    class="space-y-4"
                  >
                    <!-- Group Header with Arrow -->
                    <div class="flex items-center justify-between px-4 py-2">
                      <h4 class="text-xl font-bold text-gray-800">
                        {{ group.name }}
                      </h4>
                      <svg
                        class="w-5 h-5 text-gray-600"
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
                          class="text-base text-gray-600 hover:text-blue-600"
                        >
                          {{ item.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                    <!-- Bottom Link in First Column -->
                    <div v-if="index === 0" class="px-4">
                      <NuxtLink
                        to="https://andmain.com"
                        class="text-blue-600 text-sm font-medium hover:underline"
                      >
                        See More &rarr;
                      </NuxtLink>
                    </div>
                  </div>
                  <!-- Column 4: Visual Element -->
                  <div class="hidden lg:flex flex-col items-center justify-start px-4">
                    <img
                      :src="menu.image"
                      :alt="menu.name"
                      class="w-[360px] h-[280px] object-cover rounded"
                    />
                    <p class="mt-2 text-sm text-gray-600 text-center">
                      Explore our curated collection
                    </p>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
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
