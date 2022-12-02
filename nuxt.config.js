export default {
  router: {
    middleware: ["auth"],
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "openidsample",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  auth: {
    // localStorage: false,
    strategies: {
      AAD: {
        scheme: "openIDConnect",
        clientId: "<AADアプリのクライアントID>",
        endpoints: {
          configuration:
            "https://login.microsoftonline.com/<AADアプリのテナントID>/v2.0/.well-known/openid-configuration",
        },
        idToken: {
          property: "id_token",
          maxAge: 60 * 60 * 24 * 30,
          prefix: "_id_token.",
          expirationPrefix: "_id_token_expiration.",
        },
        responseType: "code",
        grantType: "authorization_code",
        scope: ["openid", "profile"],
        codeChallengeMethod: "S256",
      },
    },
    redirect: {
      login: "/",
      logout: "/logout",
      callback: "/callback",
      home: "/home",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
