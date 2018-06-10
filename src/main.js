// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 単純なテキストデータ
    message: '初期メッセージ'
  },
  mutations: {
    // メッセージの書き換え
    setMessage (state, payload) {
      state.message = payload
    }
  },
  getters: {
    // message をそのまま使用
    message (state) { return state.message }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
