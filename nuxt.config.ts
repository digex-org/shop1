export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/css/style.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  plugins: ['~/plugins/fontawesome.js'],
  nitro: {
    prerender: {},
    output: {
      publicDir: '.output/public',
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 10000,
    },
  },
});