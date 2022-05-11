export const state = () => ({
  doctors: [],
  loadingDoctors: false,
  errorDoctors: null,
});

export const mutations = {
  SET_DOCTORS(state, doctors) {
    state.doctors = doctors;
  },
  SET_LOADING_DOCTORS(state, loading) {
    state.loadingDoctors = loading;
  },
  SET_ERROR_DOCTORS(state, error) {
    state.errorDoctors = error;
  },
};

export const actions = {
    async fetchDoctors({ commit }, query) {
        console.log('fetchDoctors', query);
    return new Promise((resolve, reject) => {
      commit("SET_LOADING_DOCTORS", true);
      this.$axios
        .$get(`/${query}`)
        .then((doctors) => {
          commit("SET_DOCTORS", doctors);
          commit("SET_LOADING_DOCTORS", false);
          resolve(doctors);
        })
        .catch((error) => {
          commit("SET_LOADING_DOCTORS", false);
          commit("SET_ERROR_DOCTORS", error);
          reject(error);
        });
    });
  },
};

export const getters = {
  doctors: (state) => state.doctors,
  loadingDoctors: (state) => state.loadingDoctors,
};
