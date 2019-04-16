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
    UpdateTask(state, payload){

      const id = state.tasks.findIndex(todo => todo.id === payload.id);

      state.tasks[id] = payload;
    },
  },
  actions: {
    newTask({commit}, payload){
      commit('newTask', payload);
    },
    UpdateTask({commit}, payload){
      commit('UpdateTask', payload);
    }
  }
})