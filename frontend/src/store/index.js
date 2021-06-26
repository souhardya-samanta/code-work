import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
    'SET_USER' (state, payload) {
      state.user = payload
    },
    'SET_TOKEN' (state, payload) {
      state.token = payload
    }
  },
  actions: {
    REGISTER: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/users/signup', payload)
          .then(({ data, status }) => {
            if (status === 201) {
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    LOGIN: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/users/login', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              commit('SET_USER', data)
              commit('SET_TOKEN', data)
              resolve(data)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GET_USER: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/users/${payload._id}`)
          .then(({ data, status }) => {
            if (status === 200) {
              commit('SET_USER', data)
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GENERATE: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://localhost:3000/users/${payload}/generate`)
          .then(({ data, status }) => {
            if (status === 201) {
              resolve(data)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    VERIFY: ({ commit, dispatch }, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://localhost:3000/users/${payload._id}/verify/${payload.code}`)
          .then(({ data, status }) => {
            if (status === 202) {
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    LOGOUT: ({ commit }) => {
      commit('SET_USER', {})
    }
  },
  modules: {
  },
  getters: {
    userProfile: state => {
      return state.user
    }
  }
})
