import Vue from 'vue';
import Vuex from 'vuex';

import data from './tasks.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    tasks(state){
      if(!state.tasks.length){
        state.tasks = data;
      }
      return state.tasks;
    }
  },
  mutations: {
    newTask(state, payload){
      state.tasks.push(payload);
    },
  },
  actions: {
    newTask({commit}, payload){
      commit('newTask', payload);
    },
  }
})