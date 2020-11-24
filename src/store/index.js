import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./modules/auth.js";
import user from "./modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({}),
  modules: { user, auth },
  plugins: [createPersistedState()]
});
