<template>
  <section class="swiper-container w-full relative">
    <swiper
        v-bind="settings"
        :modules="isProductSlide ? [Navigation] : []"
        :navigation="isProductSlide"
        ref="swiperRef"
        class="w-full"
    >
      <!-- Slides -->
      <swiper-slide
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center justify-center"
      >
        <!-- Video Slide -->
        <template v-if="item.type === 'video'">
          <video
              :src="item.src"
              autoplay
              muted
              loop
              @ended="onVideoEnd"
              class="w-full h-auto"
          ></video>
        </template>

        <!-- Image Slide -->
        <template v-else-if="item.type === 'image'">
          <img
              :src="item.image"
              alt="Slide Image"
              class="w-64 h-64 h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
          />
          <div class="mt-4 text-center">
            <p class="text-lg font-bold text-gray-800">{{ item.title }}</p>
            <p class="text-red-500 font-semibold">
              <span class="text-xl">${{ item.price }}</span>
              <span
                  v-if="item.originalPrice"
                  class="text-gray-400 ml-2 line-through"
              >
                ${{ item.originalPrice }}
              </span>
            </p>
          </div>
        </template>

        <!-- Product Slide -->
        <template v-else>
          <div class="group relative border border-gray-300 hover:border-gray-500 p-4">
            <NuxtLink :to="{ name: 'product-product', params: { product: item.id } }">
              <div class="flex flex-col items-start hover:border-gray-500">
                  <img :src="item.image" alt="Product Image" class="w-[439px] h-[210px] object-cover mb-4" loading="lazy" />
                  <p class="text-gray-800 font-semibold">{{ item.title }}</p>
                  <p class="text-winered font-semibold">
                    <span class="text-xl">${{ item.price }}</span>
                    <span v-if="item.originalPrice"  class="text-gray-400 ml-2 line-through">
                      ${{ item.originalPrice }}
                    </span>
                  </p>
                </div>
            </NuxtLink>

            <div class="absolute top-2 right-2 flex flex-col items-center opacity-0 group-hover transition-opacity duration-300">
              <!-- Wishlist Icon -->
              <button
                  @click.stop="addToWishlist(item)"
                  class="transparent p-2 rounded-full shadow-lg hover-icon"
              >
                <i class="fas fa-heart text-black"></i>
              </button>

              <!-- Basket Icon -->
              <button
                  @click.stop="addToBasket(item)"
                  class="transparent p-2 rounded-full shadow-lg hover-icon"
              >
                <i class="fas fa-shopping-cart text-black"></i>
              </button>

              <!-- Quick View Icon -->
              <button
                  @click.stop="openQuickView(item)"
                  class="transparent p-2 rounded-full shadow-lg hover-icon"
              >
                <i class="fas fa-eye text-black"></i>
              </button>
            </div>
          </div>
        </template>
      </swiper-slide>
    </swiper>

    <!-- Quick View Modal -->
    <QuickViewModal
        v-if="showQuickView"
        :item="selectedItem"
        @close="closeQuickView"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { useCart } from "~/composables/useCart.js";

// Props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  settings: {
    type: Object,
    default: () => ({}),
  },
});

// Determine if the current slide type is "product"
const isProductSlide = computed(() =>
    props.items.some(item => item.image && item.price) // Check if item has an image and price
);
// Swiper Instance
const swiperRef = ref(null);

// Video Slide Behavior
const onVideoEnd = (event) => {
  const videoElement = event.target;
  videoElement.currentTime = 0;
  videoElement.play();
};

// State for Quick View
let showQuickView = ref(false);
let selectedItem = ref(null);

// Quick View Modal Functions
const openQuickView = (item) => {
  selectedItem.value = item;
  showQuickView.value = true;
};

const closeQuickView = () => {
  showQuickView.value = false;
  selectedItem.value = null;
};

// Wishlist and Basket Functions
const addToWishlist = (item) => {
  console.log('Added to wishlist:', item);
};

const { addItem } = useCart();
const addToBasket = (item) => {
  console.log('item', item);
  addItem({ ...item, image: item.image });
};
</script>

<style scoped>
:deep(.swiper-container) {
  width: 100%;
  overflow: hidden;
}
:deep(.swiper-slide) {
  margin-right: 10px !important;
}

:deep(.carousel) {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
:deep(.carousel::-webkit-scrollbar) {
  display: none;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgb(39, 37, 37) !important;
  transition: all 0.3s ease;
  width: 40px !important;
  height: 40px !important;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 18px !important;
  background-color: rgb(0, 0, 0);
  color:rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px !important;
  height: 40px !important;
  padding: 5px;
  transition: transform 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: aliceblue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-next:hover:after),
:deep(.swiper-button-prev:hover:after) {
  transform: scale(1.2);
}

.group:hover .group-hover {
  opacity: 1;
}
.hover-icon:hover i.fa-heart {
  color: red;
}
.hover-icon:hover i.fa-shopping-cart {
  color: #226dfb;
}
.hover-icon:hover i.fa-eye {
  color: gray;
}
</style>

