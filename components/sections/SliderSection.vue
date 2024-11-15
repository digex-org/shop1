<template>
  <div class="swiper-container">
    <swiper
        v-bind="settings"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
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
        <template v-else-if="item.type === 'image'">
          <img :src="item.src" alt="Slide Image" class="w-full h-auto object-cover" />
          <p class="slide-title">{{ item.name }}</p>
          <p class="slide-price">
            <span class="current-price">{{ item.currentPrice }}</span>
            <span v-if="item.originalPrice" class="original-price">{{ item.originalPrice }}</span>
          </p>
        </template>
        <div v-else class="product-item">
          <img :src="item.src" alt="Product Image" class="w-full h-auto object-cover mb-2">
          <p class="text-center text-gray-800 font-semibold">{{ item.name }}</p>
          <p class="text-center text-gray-600">{{ item.price }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onVideoEnd(event) {
      const videoElement = event.target;
      videoElement.currentTime = 0;
      videoElement.play();
    },
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.slide-title {
  font-weight: 600;
  margin-top: 8px;
  color: #333;
}

.slide-price {
  color: #d32f2f;
  font-weight: bold;
}

.current-price {
  color: #d32f2f;
}

.original-price {
  text-decoration: line-through;
  color: #888;
  margin-left: 8px;
}

.swiper-button-next,
.swiper-button-prev {
  color: #333;
  background-color: white;
  padding: 30px;
}
</style>
