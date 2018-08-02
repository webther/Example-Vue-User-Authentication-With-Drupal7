import Vue from 'vue'

const apiBaseUrl = `https://dev-npmjs-drupal7.pantheonsite.io/api/rest/v1`

const user = {
  token: () => {
    return Vue.axios.post(`${apiBaseUrl}/user/token.json`)
  },
  login: (username, password) => {
    return Vue.axios({
      method: 'post',
      url: `${apiBaseUrl}/user/login.json`,
      data: {
        username: username,
        password: password
      },
      withCredentials: true
    })
  },
  logout: () => {
    return Vue.axios({
      method: 'post',
      url: `${apiBaseUrl}/user/logout.json`,
      withCredentials: true
    })
  }
}

const system = {
  connect: () => {
    return Vue.axios({
      method: 'post',
      url: `${apiBaseUrl}/system/connect.json`,
      withCredentials: true
    })
  }
}

export default {
  user,
  system
};
