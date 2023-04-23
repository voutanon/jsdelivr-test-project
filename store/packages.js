import { apiGetSearch, apiGetPackage } from "@/services/package"

const state = {
  packages: {},
  currentPackage: {},
}
const actions = {
  async getSearchPackages({commit}, params) {
    const response = await apiGetSearch(params)
    commit("setPackages", response)
  },
  async getPackage({commit}, params) {
    const response = await apiGetPackage(params)
    commit("setCurrentPackage", response)
  }
}
const mutations = {
  setPackages(state, packages) {
    state.packages = packages
  },
  setCurrentPackage(state, packageData) {
    state.currentPackage = packageData
  },
}
const getters = {
  getPackages(state) {
    return state.packages
  },
  getCurrentPackage(state) {
    return state.currentPackage
  },
}
export default {
  namespaced: true, state, actions, mutations, getters,
};