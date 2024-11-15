// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
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
})