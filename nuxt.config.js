import redirectSSL from 'redirect-ssl'
// import WPAPI from 'wpapi'

const WP_CREDENTIALS = {
  endpoint: process.env.CMS_URL + '/wp-json',
  username: process.env.CMS_USERNAME,
  password: process.env.CMS_PASSWORD,
}

// const wp = new WPAPI(WP_CREDENTIALS)
// wp.redirects = wp.registerRoute('redirection/v1', '/redirect')

let fathomScript = {}
if (process.env.FATHOM_DOMAIN && process.env.FATHOM_SITE_ID) {
  fathomScript = {
    src: `https://${process.env.FATHOM_DOMAIN}/script.js`,
    'data-site': process.env.FATHOM_SITE_ID,
    defer: true,
  }
}

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  publicRuntimeConfig: {
    cms_url: process.env.CMS_URL,
    useImageKit: process.env.IMAGEKIT_BASE_URL,
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Travelmore',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        hid: 'description',
        content:
          'Travelmore is the perfect tool for travellers how like to know where they are going.',
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content:
          'Travelmore is the perfect tool for travellers how like to know where they are going.',
      },
      {
        property: 'og:image:width',
        hid: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        hid: 'og:image:height',
        content: '630',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
    script: [fathomScript, {}],
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/mixins.js',
    '~/plugins/font-awesome',
    { src: '~/plugins/google-maps', ssr: true },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vue-masonry-css', ssr: false },
    { src: '~/plugins/bootstrap', ssr: false },
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  googleFonts: {
    families: {
      // 'Roboto+Mono': {
      //   wght: [400, 600, 800],
      // },
      'Work Sans': {
        wght: [400, 500],
        ital: [400],
      },
    },
    display: 'swap',
  },

  router: {
    middleware: ['closenav', 'fathom'],
  },

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/google-fonts', '@nuxtjs/svg', 'nuxt-gsap-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/image',
    '@nuxtjs/style-resources',
    // '@nuxtjs/gtm',
    '@nuxtjs/robots',
    // '@nuxtjs/recaptcha',
    '@nuxt/content',
    '@nuxtjs/dayjs',
    // '@nuxtjs/redirect-module',
    // 'iubenda-module',
    // 'wp-nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDZ588Uw349mjqlB14un1EqiIny9kNLRXc',
          authDomain: 'travel-a3f9b.firebaseapp.com',
          projectId: 'travel-a3f9b',
          storageBucket: 'travel-a3f9b.appspot.com',
          messagingSenderId: '312953216388',
          appId: '1:312953216388:web:9bf151baf2433832e491d1',
          measurementId: 'G-4VJ0328ZDM',
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangeMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              //   onAuthStateChangedAction: 'onAuthChangedAction',
            },
          },
          firestore: true,
        },
      },
    ],
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^vue2-google-maps($|\/)/, 'gsap'],
    babel: {
      // envName: server, client, modern
      presets({ envName }) {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: {
                version: 3,
              },
            },
          ],
        ]
      },
    },
    loaders: {
      scss: { sourceMap: false },
    },
    // transpile: ['vue-slicezone', 'nuxt-sm'],
  },

  /**
   * Imports scss inside component styles.
   * See https://github.com/nuxt-community/style-resources-module
   */
  styleResources: {
    scss: ['~/assets/css/_globals.scss'],
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
    registerEffect: [
      {
        name: 'fadeUp',
        effect: (targets, config) => {
          return gsap.fromTo(
            targets,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: 'power3.out',
            }
          )
        },
      },
    ],
  },

  robots: () => {
    const config = {
      UserAgent: '*',
      Disallow: [], // add more routes here
    }

    if (process.env.VERCEL_ENV !== 'production') {
      config.Disallow.push('/')
    }

    if (process.env.SITEMAP_URL) {
      config.Sitemap = process.env.SITEMAP_URL
    }

    return config
  },

  wp: {
    ...WP_CREDENTIALS,
    customRoutes: [
      {
        extension: 'mnvr/v1',
        route: 'front',
        name: 'frontpage',
      },
      {
        extension: 'mnvr/v1',
        route: '404',
        name: 'notfound',
      },
      {
        extension: 'mnvr/v1',
        route: 'options',
        name: 'options',
      },
      {
        extension: 'mnvr/v1',
        route: 'menu',
        name: 'menu',
      },
    ],
  },

  // fetch redirects from WP Redirection plugin
  redirect: async () => {
    // const wpRedirects = await wp.redirects().perPage(200)
    // let redirects = []
    // if (wpRedirects) {
    //   redirects = wpRedirects.items.map((r) => {
    //     return {
    //       from: r.match_url,
    //       to: r.action_data.url,
    //     }
    //   })
    // }
    // return redirects
    return []
  },

  // How to setup Google analytics in GTM for nuxt:
  // https://www.ericbroucek.us/blog/google-tag-manager-google-analytics-setup-with-nuxt/
  gtm: {
    id: process.env.GTM_CODE,
    enabled: true,
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },

  // iubenda: {
  //   config: {
  //     siteId: XXXXXX,
  //     cookiePolicyId: XXXXXX,
  //     lang: 'nl',
  //     banner: { backgroundColor: '#eee', position: 'float-bottom-center' },
  //   },
  // },

  // image: {
  //   provider: 'imagekit',
  //   imagekit: {
  //     baseURL: process.env.IMAGEKIT_BASE_URL,
  //   },
  //   format: 'webp',
  //   presets: {
  //     square: {
  //       modifiers: {
  //         width: 768,
  //         height: 768,
  //         fit: 'cover',
  //       },
  //     },
  //     cover: {
  //       modifiers: {
  //         width: 1920,
  //         height: 1080,
  //         fit: 'cover',
  //       },
  //     },
  //     medium: {
  //       modifiers: {
  //         width: 800,
  //         height: 600,
  //         fit: 'medium',
  //       },
  //     },
  //     thumb: {
  //       modifiers: {
  //         width: 640,
  //         height: 480,
  //         fit: 'cover',
  //       },
  //     },
  //   },
  // },

  recaptcha: {
    hideBadge: true,
    siteKey: 'XXXXXXXXXXXXXXXXXXXXXXX',
    version: 3,
  },

  serverMiddleware: [
    '~/domainRedirects',
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production',
      exclude: ['localhost'],
    }),
  ],

  generate: {
    exclude: ['/components'],
    dir: 'dist',
  },
}
