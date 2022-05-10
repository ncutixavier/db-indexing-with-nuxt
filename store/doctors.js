export const state = () => ({
    doctors: [],
    loadingDoctors: false,
    errorDoctors: null,
})

export const mutations = {
    SET_DOCTORS(state, doctors) {
        state.doctors = doctors
    },
    SET_LOADING_DOCTORS(state, loading) { 
        state.loadingDoctors = loading
    },
    SET_ERROR_DOCTORS(state, error) { 
        state.errorDoctors = error
    }
}

export const actions = {
    async fetchDoctors({ commit }) { 
        commit('SET_LOADING_DOCTORS', true)
        try {
            const doctors = await this.$axios.$get("/departments");
            console.log("doctors::", doctors);
            commit("SET_DOCTORS", doctors);
            commit('SET_LOADING_DOCTORS', false);
            return doctors;
        } catch (error) {
            commit('SET_LOADING_DOCTORS', false);
            commit('SET_ERROR_DOCTORS', error);
            return error;
        }
    }
}
