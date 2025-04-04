<template>
  <section class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
    <!-- Vertical Thumbnail Navigation for larger screens -->
    <div class="flex md:flex-col space-x-2 md:space-y-2 md:space-x-0 overflow-auto">
      <swiper
        direction="vertical"
        slides-per-view="5"
        free-mode
        space-between="10"
        class="thumbnail-slider max-h-[400px] !hidden md:!block"
        @swiper="onThumbnailSwiper"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          @click="onThumbnailClick(index)"
          class="cursor-pointer"
        >
        <NuxtImg
            :src="image"
            :alt="`Product image thumbnail ${index + 1}`"
            class="object-cover w-16 h-16 border border-gray-200 hover:border-black"
            :class="index === activeIndex ? 'border-black' : ''"
            loading="lazy"
          />
        </swiper-slide>
      </swiper>
      
      <!-- Horizontal Thumbnail Navigation for smaller screens -->
      <div class="flex md:hidden space-x-2 overflow-x-auto">
        <div
          v-for="(image, index) in images"
          :key="index"
          @click="onThumbnailClick(index)"
          class="cursor-pointer"
        >
          <NuxtImg
            :src="image"
            :alt="`Product image thumbnail ${index + 1}`"
            class="object-cover w-16 h-16 border border-gray-200 hover:border-black"
            :class="index === activeIndex ? 'border-black' : ''"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Main Image Slider -->
    <div class="flex-grow w-full md:w-4/5">
      <swiper
        ref="mainSwiper"
        @swiper="onMainSwiper"
        @slideChange="onSlideChange"
        loop
        class="main-swiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <NuxtImg
            :src="image"
            :alt="`Product Image ${index + 1}`"
            loading="lazy"
            class="w-full object-cover max-h-[500px] md:max-h-[700px]"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';

// Accept images as a prop (assumed to be an array of string URLs)
const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  }
});

const activeIndex = ref(0);
const mainSwiperInstance = ref(null);
const thumbnailSwiperInstance = ref(null);

// Capture the main swiper instance
const onMainSwiper = (swiper) => {
  mainSwiperInstance.value = swiper;
};

// Capture the thumbnail swiper instance (if needed for further integration)
const onThumbnailSwiper = (swiper) => {
  thumbnailSwiperInstance.value = swiper;
};

// Update activeIndex when the main slider changes
const onSlideChange = () => {
  if (mainSwiperInstance.value) {
    activeIndex.value = mainSwiperInstance.value.activeIndex % props.images.length;
  }
};

// When a thumbnail is clicked, slide to that image
const onThumbnailClick = (index: number) => {
  if (mainSwiperInstance.value) {
    activeIndex.value = index;
    mainSwiperInstance.value.slideTo(index);
  }
};
</script>

<style scoped>
.thumbnail-slider {
  width: 64px;
  overflow: hidden;
  height: 100%;
}

.main-swiper img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
