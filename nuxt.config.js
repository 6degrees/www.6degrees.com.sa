export default {
	target: 'static',
	ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '6 degrees | الدرجات الست',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Where your technological future, comes today. The limits to technology uses is beyond imagination, digitize your life with us'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'author',
        content: 'Six Degrees Technologies'
      },
      {
        name: 'author',
        type: 'text/plain',
        href: '/humans.txt'
      },
      {
        name: 'keywords',
        content: ''
      },
      {
        name: 'canonical',
        content: 'https://www.6degrees.com.sa/'
      },

      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:title',
        content: '6 degrees | الدرجات الست'
      },
      {
        name: 'og:description',
        content: 'Where your technological future, comes today. The limits to technology uses is beyond imagination, digitize your life with us'
      },
      {
        name: 'og:image',
        content: 'https://www.6degrees.com.sa/assets/images/social.png'
      },
      {
        name: 'og:url',
        content: 'https://www.6degrees.com.sa'
      },
      {
        name: 'og:site_name',
        content: '6 degrees |  الدرجات الست'
      },

      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: '6 degrees | الدرجات الست'
      },
      {
        name: 'twitter:description',
        content: 'Where your technological future, comes today. The limits to technology uses is beyond imagination, digitize your life with us'
      },
      {
        name: 'twitter:image',
        content: 'https://www.6degrees.com.sa/assets/images/social.png'
      },
      {
        name: 'twitter:url',
        content: 'https://www.6degrees.com.sa'
      },
      {
        name: 'twitter:site',
        content: '@6degz'
      },
      {
        name: 'twitter:creator',
        content: '@6degz'
      },
    ],
    link: [{
        rel: 'icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/assets/images/favicon.svg'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/assets/images/favicon.png'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/bootstrap.client.js'
  }, ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null, 

  },
  server: {
    host: 'localhost',
    port: '15152',
  }
}
