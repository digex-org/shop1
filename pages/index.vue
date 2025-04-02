<template>
  <!-- SEO Meta Tags for the landing page -->
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
  </Head>

  <!-- Modular sections: each component is responsible for its own content and styling -->
  <SaleBannerSection :backgroundImage="customImage" />
  <SliderSection :items="videoSlides" :settings="videoSettings" />
  <DepartmentsSection :categories="categories" />
  <SliderSection class="container" :items="videoSlides" :settings="videoSettings" />
  <NewProductsCategory :categories="categories" />
  <BannerSection banner="/images/banner/banner-2.jpg" alt-text="Hero banner for public template" />
  <SliderSection class="container" :items="products" :settings="imageSettings" />
  <BannerNextSection banner="/images/backgrounds/home-2.jpg" alt-text="BannerNextSection img" />
  <NewsletterSection banner="/images/backgrounds/home-3.jpg" alt-text="Newsletter img" />
</template>

<script setup lang="ts">
import { useCategory } from '~/composables/useCategory';
import { useProduct } from '~/composables/useProduct';
import customImage from '~/assets/images/backgrounds/home-1.png';
import { useSeo } from '~/composables/useSeo';

// Set dynamic SEO for the landing page
const { title, description } = useSeo('Home - Elegant Furniture', 'Welcome to our collection of elegant furniture.');

// Load categories and products via composables
const { categories } = useCategory();
const { products } = useProduct();

// Define slider content and settings
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
