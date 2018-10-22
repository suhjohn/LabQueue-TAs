import Vue from "vue";
import Vuex, { mapActions } from "vuex";
import apis from "@/apis/index";

Vue.use(Vuex);
const store = () =>
  new Vuex.Store({
    state: {
      labTAs: {}
    },
    getters: {
      getLabTa: state => query => {}
    },
    mutations: {
      setLabTAs(state, labTAs) {
        state.labTAs = labTAs;
      }
    },
    actions: {
      ...apis
    }
  });

export default store;
