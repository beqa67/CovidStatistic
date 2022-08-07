import { getField, updateField } from 'vuex-map-fields'
const sortFieldState = {
  name: '', // deaths / confirmed / recovered
  descending: false
}

export const state = () => ({
  searchFieldValue: '',
  sortFields: {...sortFieldState}
})

export const mutations = {
  updateField,
  setSearchFieldValue: (state, payload) => {
    state.searchFieldValue = payload
  },
  setSortFields: (state, payload) => {
    state.sortFields = payload
  },
  resetSorting: (state) => {
    state.sortFields = {...sortFieldState}
  },
  resetSearchFieldValue: (state) => {
    state.searchFieldValue = ''
  },
}

export const getters = {
  getField,
  getSearchFieldValue: (state) => state.searchFieldValue,
  getSortFields: (state) => state.sortFields,
}
