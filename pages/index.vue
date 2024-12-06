<template>
  <div>
    <SaleBannerSection />
    <SliderSection class="py-7" :items="videoSlides" :settings="videoSettings" />
    <div class="container mx-auto px-4">
      <h3 class="text-center font-bold text-xl mt-8">Shop by Department</h3>
      <DepartmentsSection :categories="categories" class-name="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"/>
      <SliderSection class="my-7 px-1" :items="videoSlides" :settings="videoSettings" />
      <BannerSection banner="/images/banner.webp" />
      <SliderSection class="my-7" :items="products" :settings="imageSettings" />
      <ShopBannerSection class="mb-7" background-image="images/banner1.webp" />
    </div>
  </div>
</template>

<script setup>
import { useCategory } from '~/composables/useCategory';
import {useProduct} from "~/composables/useProduct.js";

const { categories } = useCategory();

const { products } = useProduct();

const videoSlides = [
  { type: 'video', src: '/videos/video.mp4', layout: 'full' },
  { type: 'video', src: '/videos/video1.mp4', layout: 'full' },
];

const videoSettings = {
  autoplay: true,
  autoplayTimeout: 3000,
  slidesPerView: 1,
  speed: 500,
};

const imageSettings = {
  slidesPerView: 1,
  breakpoints: {
    420: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 }
  },
  spaceBetween: 20,
  loop: true,
  pagination: { clickable: true },
};
</script>

