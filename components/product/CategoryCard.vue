<template>
    <!-- SEO Meta Tags for the landing page -->
   <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
  </Head>
  <NuxtLink :to="{ name: 'category-category', params: { category: encodeURIComponent(category.name) } }">
      <div class="relative group w-[217px] h-[310px] mx-1">
        <img :src="category.image" :alt="category.name" class="category-image w-full h-full object-cover" loading="lazy" />
        <div class="absolute bottom-0 w-full  bg-opacity-50 text-white text-center py-2">
          <p>{{ category.name }}</p>
        </div>
      </div>

  </NuxtLink>
</template>

<script setup>
// Set dynamic SEO for the landing page
const { title, description } = useSeo('Home - Elegant Furniture', 'Welcome to our collection of elegant furniture.');

defineProps({
  category: {
    type: Object,
    required: true
  }
});

</script>


