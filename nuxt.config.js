const axios = require("axios");
const baseProtocol = process.env.Protocol || "http";
const baseURL = process.env.BASE_URL || "localhost:8000";

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "LabQueue.io Statistics",
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
      }
    ]
  },
  env: {
    baseURL: baseURL
  },

  modules: ["@nuxtjs/axios"],
  /*
   ** Axios module configuration
   */
  axios: {
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
