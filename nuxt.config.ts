export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      title: 'North Island Fly & Light Tackle - Captain Dave Flanagan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Fly fishing and light tackle guide service with Captain Dave Flanagan on Long Island, NY. Expert guided fishing trips in Long Island Sound.' 
        },
        { name: 'keywords', content: 'fly fishing, light tackle, fishing guide, Long Island, Captain Dave Flanagan, striped bass, bluefish' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})