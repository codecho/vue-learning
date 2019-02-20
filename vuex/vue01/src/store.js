import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    increase({commit}) {
        commit('increase')
    },
    decrease({commit}) {
        commit('decrease')
    },
    increaseIfOdd({commit, state}) {
        if (state.count % 2 === 1) {
            commit('increase')
        }
    },
    increaseAsync({commit}) {
        setTimeout(() => {
            commit('increase')
        }, 1000)
    }
}

const mutations = {
    increase(state) {
        state.count++
    },
    decrease(state) {
        state.count--
    }
}

const getters = {
    odd_even(state) {
        return state.count % 2 === 0 ? '偶数' : '奇数'
    }
}

export default new Vuex.Store({
    state,  // 状态对象
    actions,    // 包含多个对应事件回调函数的对象
    mutations,  // 包含多个更改store状态的函数的对象
    getters     // 包含多个getter计算属性的函数的对象
})