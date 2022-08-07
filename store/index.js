export const actions = {
  nuxtServerInit() {
    console.log("server init")
  },
  nuxtClientInit({ dispatch, state }) {
    console.log("client init")
  },
}
