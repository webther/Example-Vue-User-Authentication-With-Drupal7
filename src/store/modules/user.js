import api from '../../api/api'
import axios from 'axios/index'

const state = {
  token: sessionStorage.getItem('token') || '',
  user: {}
}

const getters = {
  token: state => state.token,
  user: state => state.user,
  isAuthenticated: state => !!state.token
}

const actions = {
  'USER_LOAD': ({commit}) => {
    return api.system.connect()
      .then((res) => {
        commit('USER_LOAD', res)
      })
  },
  'USER_LOGIN': ({commit}, user) => {
    return api.user.login(user.username, user.password)
      .then((res) => {
        commit('USER_LOGIN', res)
        sessionStorage.setItem('token', res.data.token)
        axios.defaults.headers.common['X-CSRF-TOKEN'] = res.data.token
      })
  },
  'USER_LOGOUT': ({commit}) => {
    return api.user.logout()
      .then(() => {
        commit('USER_LOGOUT')
        sessionStorage.removeItem('token')
        delete axios.defaults.headers.common['X-CSRF-TOKEN']
      })
  }
}

const mutations = {
  'USER_LOAD': (state, res) => {
    state.user = res.data.user
    state.isAuthenticated = state => !!state.token
  },
  'USER_LOGIN': (state, res) => {
    state.token = res.data.token
    state.user = res.data.user
  },
  'USER_LOGOUT': (state) => {
    state.token = ''
    state.user = {}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
