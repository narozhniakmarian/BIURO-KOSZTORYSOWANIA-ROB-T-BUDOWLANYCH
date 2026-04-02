// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  css: ['./app/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Biuro Kosztorysowania Robót Budowlanych',
      htmlAttrs: { lang: 'pl' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Profesjonalne biuro kosztorysowania robót budowlanych. Kosztorysy inwestorskie, ofertowe, powykonawcze, przedmiary i weryfikacje. Opole.',
        },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    optimizeDeps: {
      include: [
        'swiper/vue',
        'swiper/modules',
        'lucide-vue-next',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },
})
