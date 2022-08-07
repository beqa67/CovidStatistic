import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  searchFieldValue: '',
  sortFields: {
    name: '', // deaths / confirmed / recovered
    descending: false
  }
})

export const mutations = {
  updateField,
  setSearchFieldValue: (state, payload) => {
    state.searchFieldValue = payload
  },
  setSortFields: (state, payload) => {
    state.sortFields = payload
  },
}

export const getters = {
  getField,
  getSearchFieldValue: (state) => state.searchFieldValue,
  getSortFields: (state) => state.sortFields,
}
