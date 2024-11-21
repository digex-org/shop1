<template>
  <div class="flex space-x-4">
    <!-- Vertical Thumbnail Navigation -->
    <div class="flex flex-col space-y-2">
      <swiper
          direction="vertical"
          slides-per-view="5"
          free-mode
          space-between="10"
          class="thumbnail-slider max-h-[400px]"
          @swiper="onThumbnailSwiper"
      >
      <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          @click="onThumbnailClick(index)"
          class="cursor-pointer"
      >
        <img
            :src="image"
            :alt="'Thumbnail ' + index"
            class="rounded-lg object-cover w-16 h-16 border border-gray-200 hover:border-black"
            :class="index === activeIndex ? 'border-black' : ''"
        />
      </swiper-slide>
      </swiper>
    </div>

    <!-- Main Image Slider -->
    <div class="flex-grow w-4/5">
      <swiper
          ref="mainSwiper"
          @swiper="onMainSwiper"
      @slideChange="onSlideChange"
      navigation
      loop
      class="main-swiper"
      >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img
            :src="image"
            :alt="'Product Image ' + index"
            class="rounded-lg"
        />
      </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);
const mainSwiperInstance = ref(null);
const thumbnailSwiperInstance = ref(null);

const onMainSwiper = (swiper) => {
  mainSwiperInstance.value = swiper;
};

const onThumbnailSwiper = (swiper) => {
  thumbnailSwiperInstance.value = swiper;
};

const onSlideChange = () => {
  if (mainSwiperInstance.value) {
    activeIndex.value = mainSwiperInstance.value.activeIndex % props.images.length;
  }
};

const onThumbnailClick = (index) => {
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
