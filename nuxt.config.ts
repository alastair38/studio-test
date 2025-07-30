// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts'],

  content: {
    database: {
      type: 'sqlite',
      filename: 'SQLITE_DB_LOCATION',
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
    },
    experimental: { sqliteConnector: 'better-sqlite3' },
  },
});
