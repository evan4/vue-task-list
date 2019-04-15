<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Tasks List</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link 
        class="p-2 text-dark"
        to="/">Tasks list</router-link>
        <router-link 
        class="p-2 text-dark"
        to="/task-new">New task</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">

    
</style>
