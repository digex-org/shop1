<template>
  <section>
    <nav class="border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center py-4 gap-8">
          <div
              v-for="(menuItem, index) in categories"
              :key="index"
              class="relative group"
          >
            <button
                @click="toggleMenu(menuItem.name)"
                class="text-gray-800 underline underline-offset-1 decoration-zinc-400"
            >
              {{ menuItem.name }}
            </button>

            <!-- Submenu -->
            <div
                v-if="activeMenu === menuItem.name"
                class="absolute left-0 top-full mt-2 w-max bg-white shadow-md z-50 space-y-2 p-5 text-sm font-semibold text-gray-800 rounded-md"
            >
              <div
                  v-for="(link, linkIndex) in menuItem.subCategory"
                  :key="linkIndex"
                  class="relative group"
                  @mouseenter="link.subCategory ? activateSubmenu(linkIndex) : null"
                  @mouseleave="deactivateSubmenu"
              >
                <button class="hover:text-gray-600 flex items-center justify-between w-full lg:w-auto">
                  {{ link.name }}
                </button>
                <!-- Submenu for the category -->
                <div
                    v-if="link.subCategory && activeSubmenu === linkIndex"
                    class="absolute left-[calc(100%+20px)] top-0 w-40 bg-white shadow-lg border rounded-md p-2 space-y-2 text-gray-800"
                >
                  <a
                      v-for="(sublink, subIndex) in link.subCategory"
                      :key="subIndex"
                      :href="sublink.href"
                      class="block text-sm hover:text-gray-600"
                  >
                    {{ sublink.name }}
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
import { useCategory } from '~/composables/useCategory'

const { categories } = useCategory();

const activeMenu = ref(null);
const activeSubmenu = ref(null);

let subCategoryTimeout = null;

const toggleMenu = (menu) => {
  if (activeMenu.value === menu) {
    activeMenu.value = null;
  } else {
    activeMenu.value = menu;
  }
  activeSubmenu.value = null;
};

const activateSubmenu = (index) => {
  if (subCategoryTimeout) {
    clearTimeout(subCategoryTimeout);
    subCategoryTimeout = null;
  }
  activeSubmenu.value = index;
};

const deactivateSubmenu = () => {
  subCategoryTimeout = setTimeout(() => {
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

