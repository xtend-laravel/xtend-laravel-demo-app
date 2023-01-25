export default defineNuxtConfig({
  extends: [
      process.env.NUXT_APP_THEME_LOCAL_PACKAGE_PATH,
  ],
  runtimeConfig: {
    // Server side only env variables
    public: {
      appPreset: process.env.NUXT_APP_PRESET || 'default',
    }
  },
  srcDir: 'src',
  components: [
    {
      path: `${process.env.NUXT_APP_THEME_LOCAL_PACKAGE_PATH}/components/${process.env.NUXT_APP_PRESET}`,
      pathPrefix: false,
    },
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    // https://github.com/huntersofbook/huntersofbook/tree/main/packages/naive-ui-nuxt
    '@huntersofbook/naive-ui-nuxt',
    './src/modules/extend-routes',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-turkey'],
  },

  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      { code: 'tr', file: 'tr-TR.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'tr',
      fallbackLocale: 'tr',
      availableLocales: ['en', 'tr'],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
  },

  vite: {
    logLevel: 'info',
    server: {
        fs: {
          // @ts-ignore
          allow: [process.env.NUXT_APP_THEME_LOCAL_PACKAGE_PATH],
        }
    }
  },

})
