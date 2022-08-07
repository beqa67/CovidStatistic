export const state = () => ({
 summaryData: {
   deaths: 0,
   confirmed: 0,
   recovered: 0
 }
})

export const mutations = {
  setSummaryData: (state, payload) => {
    state.summaryData = payload
  },
}

export const getters = {
  getSummaryData: (state) => state.summaryData,
}
