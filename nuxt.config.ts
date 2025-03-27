export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: 'Elegant Furniture - Your Home, Your Style',
      meta: [
        { name: 'description', content: 'Discover a curated collection of elegant, high-quality furniture for your home.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Add other global meta tags as needed
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' },   
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&display=swap'
        }
      ]
    }
  },
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