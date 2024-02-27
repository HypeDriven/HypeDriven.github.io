import { getField, updateField } from "vuex-map-fields";

export default {
    state: {
        fullName: '',
        email: '',
        companyName: '',
        message: '',
        privatePolicyContactUs: false,
        privatePolicyApplyVacancy: false
    },
    mutations: {
      updateField,
      agreeContactUs (state) {
        state.privatePolicyContactUs = true
      },
      agreeApplyVacancy (state) {
        state.privatePolicyApplyVacancy = true
      },
      switchAgreeApplyVac (state) {
        state.privatePolicyApplyVacancy = !state.privatePolicyApplyVacancy
      }
    },
    getters: {
      getField,
      fullName: (state) => state.fullName,
      email: (state) => state.email,
      companyName: (state) => state.companyName,
      message: (state) => state.message,
      getPrivatePolicyContactUs(state) {
          return state.privatePolicyContactUs
      }
    }
}