<template>
  <section>
    <nav class="border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div
              v-for="(menuItem, index) in mainMenu"
              :key="index"
              class="relative group"
          >
            <button
                @click="toggleMenu(menuItem.label)"
                class="text-xl font-bold text-gray-800"
            >
              {{ menuItem.label }}
            </button>

            <!-- Submenu -->
            <div
                v-if="activeMenu === menuItem.label"
                class="absolute left-0 top-full mt-2 w-max bg-white shadow-md z-50 space-y-2 p-5 text-sm font-semibold text-gray-800 rounded-md"
            >
              <div
                  v-for="(link, linkIndex) in menuItem.submenu"
                  :key="linkIndex"
                  class="relative group"
                  @mouseenter="link.submenu ? activateSubmenu(linkIndex) : null"
                  @mouseleave="deactivateSubmenu"
              >
                <button class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto">
                  {{ link.label }}
                </button>
                <!-- Submenu for the category -->
                <div
                    v-if="link.submenu && activeSubmenu === linkIndex"
                    class="absolute left-[calc(100%+20px)] top-0 w-40 bg-white shadow-lg border rounded-md p-2 space-y-2 text-gray-800"
                >
                  <a
                      v-for="(sublink, subIndex) in link.submenu"
                      :key="subIndex"
                      :href="sublink.href"
                      class="block text-sm hover:text-gray-600"
                  >
                    {{ sublink.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeMenu = ref(null);
const activeSubmenu = ref(null);

let submenuTimeout = null;

const mainMenu = [
  {
    label: 'Category',
    submenu: [
      {
        label: 'Kitchen',
        submenu: [
          { label: 'Dishes', href: '#' },
          { label: 'Glasses', href: '#' },
          { label: 'For cooking', href: '#' },
        ],
      },
      {
        label: 'Bedroom',
        submenu: [
          { label: 'King size bed', href: '#' },
          { label: 'Wardrobe', href: '#' },
          { label: 'Nightstand', href: '#' },
        ],
      },
      {
        label: 'Living room',
        submenu: [
          { label: 'Sofas', href: '#' },
          { label: 'Armchairs', href: '#' },
        ]
      }
    ],
  },
  {
    label: 'New',
    submenu: [
      {
        label: 'New in Kitchen',
        submenu: [
          { label: 'New Dishes', href: '#' },
          { label: 'New Utensils', href: '#' },
        ],
      },
      {
        label: 'New in Bedroom',
        submenu: [
          { label: 'New Beds', href: '#' },
          { label: 'New Wardrobes', href: '#' },
        ],
      },
      {label: 'New in Living room', href: '#'},
      {label: 'New in Bathroom', href: '#'},
      {label: 'New in Outdoor', href: '#'},
      {label: 'New in Lighting', href: '#'},
    ],
  },
  {
    label: 'Good Deal',
    submenu: [
      {
        label: 'For Sale',
        submenu: [
          { label: 'Discounted Items', href: '#' },
          { label: 'Flash Sale', href: '#' },
        ],
      },
      {
        label: 'Last Chance',
        submenu: [
          { label: 'Ending Soon', href: '#' },
          { label: 'Clearance', href: '#' },
        ],
      },
    ],
  },
];
const toggleMenu = (menu) => {
  if (activeMenu.value === menu) {
    activeMenu.value = null;
  } else {
    activeMenu.value = menu;
  }
  activeSubmenu.value = null;
};

const activateSubmenu = (index) => {
  if (submenuTimeout) {
    clearTimeout(submenuTimeout);
    submenuTimeout = null;
  }
  activeSubmenu.value = index;
};

const deactivateSubmenu = () => {
  submenuTimeout = setTimeout(() => {
    activeSubmenu.value = null;
  }, 300);
};
</script>

<style scoped>
.relative .absolute {
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
}
.hidden {
  visibility: hidden;
  opacity: 0;
}
.block {
  visibility: visible;
  opacity: 1;
}
</style>

