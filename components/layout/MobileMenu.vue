<!-- components/layout/MobileMenu.vue -->
<template>
  <div class="md:hidden relative z-50">
    <button @click="toggleMenu" class="p-2 focus:outline-none">
      <!-- Toggle Icon: Hamburger if closed, X if open -->
      <template v-if="isOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </template>
      <template v-else>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </template>
    </button>
    <transition name="fade">
      <nav v-if="isOpen" class="bg-white absolute w-full top-full left-0 shadow-md">
        <!-- Mobile Search Bar -->
        <div class="px-4 py-2 border-b border-gray-200">
          <div class="relative">
            <span class="absolute left-3 top-2 text-gray-400">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search for deals, products, and more..."
              class="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm text-gray-600 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500"
              aria-label="Search"
            />
          </div>
        </div>
        <!-- Mobile Menu Items -->
        <ul class="flex flex-col">
          <li v-for="menu in menus" :key="menu.id" class="border-b">
            <div class="flex justify-between items-center">
              <NuxtLink
                :to="menu.url"
                class="block py-3 px-4 hover:bg-gray-100 flex-1"
              >
                {{ menu.name }}
              </NuxtLink>
              <!-- If the menu has a submenu, show a toggle button -->
              <template v-if="menu.subMenu && menu.subMenu.length">
                <button @click="toggleSubmenu(menu.id)" class="p-2 focus:outline-none">
                  <svg v-if="openSubmenu === menu.id" class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <svg v-else class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </template>
            </div>
            <!-- Submenu Items -->
            <transition name="fade">
              <ul v-if="openSubmenu === menu.id" class="flex flex-col pl-8 bg-gray-50">
                <li v-for="(subItem, idx) in menu.subMenu" :key="idx" class="border-b">
                  <NuxtLink :to="subItem.url" class="block py-2 px-4 hover:bg-gray-100">
                    {{ subItem.name }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMobileMenu } from '~/composables/useMobileMenu';

const { menus } = useMobileMenu();
const isOpen = ref(false);
const openSubmenu = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  // Close any open submenu when closing the mobile menu.
  if (!isOpen.value) {
    openSubmenu.value = null;
  }
};

const toggleSubmenu = (menuId) => {
  openSubmenu.value = openSubmenu.value === menuId ? null : menuId;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
