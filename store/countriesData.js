export const state = () => ({
 countries: [],
 countriesFullDetails: [],
  loaded: false
})

export const mutations = {
  setCountries: (state, payload) => {
    state.countries = payload
  },
  setCountriesFullData: (state, payload) => {
    state.countriesFullDetails = payload
  },
  setLoaded: (state, payload) => {
    state.loaded = payload
  }
}

export const actions = {
  async fetchCountries({commit }) {
    const { data } = await this.$axios.get('/api/countries')
    commit('setCountries', data)
    commit('setCountriesFullData', data)
  },

  async fetchCountry(_, payload) {
    const { code } = payload;

    const { data } = await this.$axios.post('/api/get-country-statistics', { code })

    return { ...data }
  }
}

export const getters = {
  countries: (state) => state.countries,
  countriesFullDetails: (state) => state.countriesFullDetails,
  getLoaded: (state) => state.loaded,
}
