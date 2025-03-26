<template>
    <SaleBannerSection :backgroundImage="customImage" />
    <SliderSection class="py-7" :items="videoSlides" :settings="videoSettings" />
    <DepartmentsSection :categories="categories" class-name="flex flex-wrap justify-center gap-6"/>
    <SliderSection class="flex items-center justify-center relative py-12 px-6 bg-white" :items="videoSlides" :settings="videoSettings" />
    <NewProductsCategory :categories="categories" class-name="flex flex-wrap justify-center py-12 px-6 gap-6"/>
    <BannerSection banner='/images/banner/banner-2.jpg' alt-text="Hero banner for public template" />
    <SliderSection class="my-7" :items="products" :settings="imageSettings" />
    <BannerNextSection banner="/images/backgrounds/home-2.jpg" alt-text="BannerNextSection img" />
    <NewsletterSection banner="/images/backgrounds/home-3.jpg" alt-text="Newsletter img" />
</template>

<script setup>
import { useCategory } from '~/composables/useCategory';
import {useProduct} from "~/composables/useProduct.js";
import customImage from '~/assets/images/backgrounds/home-1.png';

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

