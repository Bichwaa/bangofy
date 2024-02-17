// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['string-width', 'wide-align', 'shadcn-nuxt']
  },
  // alias: {
  //   'wide-align': '/wide-align/align.cjs.js'
  // },
  modules: [
    '@nuxtjs/tailwindcss','@pinia/nuxt','@nuxt/image',
    'vue3-carousel-nuxt','shadcn-nuxt','@vueuse/nuxt',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "@/components/ui"
     */
    componentDir: './components/ui'
  },
  carousel: {
    prefix: 'MyPrefix'
  },
  image: { //delete later
    domains: ['nuxtjs.org']
  }
  
})