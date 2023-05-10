import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        privatePolicyContactUs: false,
        privatePolicyApplyVacancy: false
      }
    },
    mutations: {
      agree1 (state) {
        state.privatePolicyContactUs = true
      },
      agree2 (state) {
        state.privatePolicyApplyVacancy = true
      }
    }
})

export default store;