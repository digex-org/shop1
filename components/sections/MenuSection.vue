<template>
  <section>
    <nav class="border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <button @click="toggleMenu" class="text-xl font-bold text-gray-800">Category</button>
        </div>

        <!-- Navigation Links -->
        <div
            :class="[
            'absolute w-max bg-white shadow-md z-50 space-y-2 p-5 text-sm font-semibold text-gray-800 rounded-md',
            isOpen ? 'block' : 'hidden',
          ]"
        >
          <div
              v-for="(link, index) in links"
              :key="index"
              class="relative group"
              @mouseenter="activateSubmenu(index)"
              @mouseleave="deactivateSubmenu"
          >
            <button class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto">
              {{ link.label }}
            </button>
            <!-- Submenu -->
            <div
                v-if="activeSubmenu === index"
                class="absolute left-24 top-0 w-40 bg-white shadow-lg border rounded-md p-2 space-y-2 text-gray-800"
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
    </nav>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const activeSubmenu = ref(null);

// Navigation links with submenus
const links = [
  { label: 'New', href: '#', submenu: [
      {label: 'New in Kitchen', href: '#'},
      {label: 'New In Bedroom', href: '#'},
      {label: 'New in Living room', href: '#'},
      {label: 'New in Bathroom', href: '#'},
      {label: 'New in Outdoor', href: '#'},
      {label: 'New in Lighting', href: '#'},
    ]
  },
  { label: 'Good Deal', href: '#', submenu:
        [
          {label: 'For sell', href: '#'},
          {label: 'Last chance', href: '#'},
        ]
  },
  {
    label: 'Kitchen',
    href: '#',
    submenu: [
      {label: 'Dishes', href: '#'},
      {label: 'Glasses', href: '#'},
      {label: 'For cooking', href: '#'},
    ],
  },
  {
    label: 'Bedroom',
    href: '#',
    submenu: [
      {label: 'King size bed', href: '#'},
      {label: 'Wardrobe', href: '#'},
      {label: 'Nightstand', href: '#'},
    ],
  },
  {label: 'Living room', href: '#', submenu: [
      {label: 'Sofas', href: '#'},
      {label: 'Armchairs', href: '#'},
    ]
  },
  {
    label: 'Bathroom',
    href: '#',
    submenu: [
      {label: 'Mirrors', href: '#'},
      {label: 'Curtains', href: '#'},
    ],
  },
  {label: 'Outdoor', href: '#', submenu: [
      {label: 'Garden set', href: '#'}
    ]
  },
  {label: 'Lighting', href: '#', submenu: [
      {label: 'Chandeliers', href: '#'},
      {label: 'Local lighting', href: '#'},
      {label: 'Laps', href: '#'}
    ]
  },
];

// Toggle the main menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  // Close submenu if the menu is closed
  if (!isOpen.value) {
    activeSubmenu.value = null;
  }
};

// Activate submenu on hover
const activateSubmenu = (index) => {
  if (links[index].submenu) {
    activeSubmenu.value = index;
  }
};

// Deactivate submenu on hover out
const deactivateSubmenu = () => {
  activeSubmenu.value = null;
};
</script>

<style scoped>
</style>
