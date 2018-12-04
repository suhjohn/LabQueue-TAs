const axios = require("axios");
const baseProtocol = process.env.Protocol || "http";
const baseURL = process.env.BASE_URL || "http://staging.labqueue.io";

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "LabQ LabTA",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      /*
      FontAwesome CDN
      https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css
      */
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
        integrity:
          "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
        crossorigin: "anonymous"
      },
      /* Font CDN
       */
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Domine:400,700"
      }
    ]
  },
  env: {
    baseURL: baseURL
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      console.log(savedPosition);
      return { x: 0, y: 0 };
    }
  },
  /*
  CSS Options  
  */
  css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],

  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: `${baseProtocol}://${baseURL}/api-proxy/v2/`
  },
  plugins: [
    { src: "~plugins/vue-chartjs.js", ssr: false },
    { src: "~/plugins/nuxt-client-init.js", ssr: false }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#8eaebd" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ["axios"],
    publicPath: `/${require("./secrets.json").NODE_ENV}/_nuxt/`,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  srcDir: "labqueue_stats/",
  performance: {
    gzip: false
  }
};
