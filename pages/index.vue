<template>
  <div>
    <MenuSection />
    <SaleBannerSection />
    <SliderSection class="py-7" :items="videoSlides" :settings="videoSettings" />
    <div class="container mx-auto px-4">
      <h3 class="text-center font-bold text-xl mt-8">Shop by Department</h3>
      <DepartmentsSection :products="products" class-name="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"/>
      <SliderSection class="my-7 px-1" :items="videoSlides" :settings="videoSettings" />
      <BannerSection banner="/images/banner.webp" />
      <SliderSection class="my-7" :items="productsSlide" :settings="imageSettings" />
      <ShopBannerSection class="mb-7" background-image="images/product.webp" />
    </div>
  </div>
</template>

<script setup>

const products = [
  { id: '1', image: '/images/product.webp' },
  { id: '2', image: '/images/product.webp' },
  { id: '3', image: '/images/product.webp' },
  { id: '4', image: '/images/product.webp' },
  { id: '5', image: '/images/product.webp' },
  { id: '6', image: '/images/product.webp' },
  { id: '7', image: '/images/product.webp' },
  { id: '8', image: '/images/product.webp' },
  { id: '9', image: '/images/product.webp' },
  { id: '10', image: '/images/product.webp' },
];

const productsSlide = Array.from({ length: 10 }, () => ({
  type: 'image',
  src: '/images/product.webp',
  currentPrice: '$1,349.00',
  originalPrice: '$1,549.00',
}));

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

