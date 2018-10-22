const axios = require("axios");
const baseProtocol = process.env.Protocol || "http";
const baseURL = process.env.BASE_URL || "localhost:8000";

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "labqueue_stats",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  env: {
    baseURL: baseURL
  },

  modules: ["@nuxtjs/axios"],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: `${baseProtocol}://${baseURL}/api/`
  },
  plugins: [],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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
  }
};
