// @ts-ignore
import Vue from 'vue'
import Vuex from 'vuex'
import Vuexer from '../lib'

Vue.use(Vuex)

type State = { count: number }

const state: State = {
  count: 10
}

const store = new Vuex.Store({
  state,
  mutations: {
    INCREMENT (state: State) {
      state.count++
    }
  }
})

Vue.use(Vuexer, {
  store,
  actions: {
    setIncrement (ctx: any) {
      ctx.dispatch('INCREMENT')
    }
  },
  getters: {
    getCount: (state: State) => state.count
  }
})

describe('Vuexer testing.', () => {
  it('Vuexer should work.', done => {
    const vm = new Vue()
    expect(vm.$vuexer).toBeDefined()
    expect(vm.$vuexer.getCount).toBe(10)
    vm.$vuexer.setIncrement()
    setTimeout(() => {
      expect(vm.$vuexer.getCount).toBe(11)
      done()
    }, 150)
  })
})
