<template>
  <section class="swiper-container w-full">
    <swiper v-bind="settings" class="w-full">
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
              :src="item.src"
              alt="Slide Image"
              class="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
          />
          <div class="mt-4 text-center">
            <p class="text-lg font-bold text-gray-800">{{ item.name }}</p>
            <p class="text-red-500 font-semibold">
              <span class="text-xl">{{ item.currentPrice }}</span>
              <span
                  v-if="item.originalPrice"
                  class="text-gray-400 ml-2 line-through"
              >
                {{ item.originalPrice }}
              </span>
            </p>
          </div>
        </template>

        <!-- Product Slide -->
        <template v-else>
          <div class="flex flex-col items-center">
            <img
                :src="item.src"
                alt="Product Image"
                class="w-full h-auto object-cover mb-4 rounded-lg shadow-md"
                loading="lazy"
            />
            <p class="text-center text-gray-800 font-semibold">{{ item.name }}</p>
            <p class="text-center text-gray-600">{{ item.price }}</p>
          </div>
        </template>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

defineProps({
  items: {
    type: Array,
    required: true,
  },
  settings: {
    type: Object,
    default: () => ({}),
  },
});

const onVideoEnd = (event) => {
  const videoElement = event.target;
  videoElement.currentTime = 0;
  videoElement.play();
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  overflow: hidden;
}
</style>
