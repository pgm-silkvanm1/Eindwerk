import redirectSSL from 'redirect-ssl'
// import WPAPI from 'wpapi'

const WP_CREDENTIALS = {
  endpoint: process.env.CMS_URL + '/wp-json',
  username: process.env.CMS_USERNAME,
  password: process.env.CMS_PASSWORD,
}

const BASE_URL =
  process.env.VERCEL_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.BASE_URL || 'https://' + process.env.VERCEL_URL

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
    title: 'Eindwerk',
    htmlAttrs: {
      lang: 'nl',
    },
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
          'Chateau Pironne is een buitengewone plek voor mooie momenten. Als verborgen parel in het Waasland vormt het de ideale locatie voor jouw event, feest, receptie of workshop.',
      },
      {
        name: 'og:description',
        hid: 'og:description',
        content:
          'Chateau Pironne is een buitengewone plek voor mooie momenten. Als verborgen parel in het Waasland vormt het de ideale locatie voor jouw event, feest, receptie of workshop.',
      },
      {
        property: 'og:image',
        hid: 'og:image',
        content: `${BASE_URL}/img/og-image.jpg`,
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
        type: 'image/x-icon',
        href: '/favicon.svg',
      },
      {
        rel: 'canonical',
        href: BASE_URL,
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/hcx1lkg.css',
      },
    ],
    script: [{ ...fathomScript }],
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
    { src: '~/plugins/bootstrap', ssr: false },
    '~/plugins/vue-slick-carousel',
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
  components: [
    '~/components',
    '~/components/base',
    '~/components/slices',
    '~/components/ui',
  ],

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
              duration: 1.2,
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
    fallback: true,
  },
}
