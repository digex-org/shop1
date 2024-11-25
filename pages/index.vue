<template>
  <div>
    <MenuSection />
    <SaleBannerSection />
    <SliderSection class="py-7" :items="videoSlides" :settings="videoSettings" />
    <div class="container mx-auto">
      <h3 class="text-center font-bold text-xl mt-8">Shop by Department</h3>
      <DepartmentsSection :products="products" class-name="product-grid"/>
      <SliderSection class="my-7 px-1" :items="videoSlides" :settings="videoSettings" />
      <Banner banner="/images/banner.webp" />
      <SliderSection class="my-7" :items="productsSlide" :settings="imageSettings"/>
      <ShopBannerSection class="mb-7" background-image="images/product.webp"/>
    </div>
  </div>
</template>
<script>
import Banner from "~/components/sections/BannerSection.vue";
import ShopBannerSection from "~/components/sections/ShopBannerSection.vue";

export default {
  components: {ShopBannerSection, Banner},
  data() {
    return {
      products: [
        { id: '1', image: '/images/product.webp' },
        { id: '2',image: '/images/product.webp' },
        { id: '3', image: '/images/product.webp' },
        { id: '4', image: '/images/product.webp' },
        { id: '5', image: '/images/product.webp' },
        { id: '6', image: '/images/product.webp' },
        { id: '7', image: '/images/product.webp' },
        { id: '8', image: '/images/product.webp' },
        { id: '9', image: '/images/product.webp' },
        { id: '10', image: '/images/product.webp' },
      ],
      productsSlide: [
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image',src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
        { type: 'image', src: '/images/product.webp', currentPrice: '$1,349.00', originalPrice: '$1,549.00' },
      ],
      videoSlides: [
        {
          type: 'video',
          src: '/videos/video.mp4',
          layout: 'full',
        },
        {
          type: 'video',
          src: '/videos/video1.mp4',
          layout: 'full',
        },
      ],
      videoSettings: {
        autoplay: true,
        autoplayTimeout: 3000,
        perPage: 1,
        speed: 500,
        pagination: true,
        controls: false,
      },
      imageSettings : {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        pagination: true,
      }
    };
  },
};
</script>
<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
</style>