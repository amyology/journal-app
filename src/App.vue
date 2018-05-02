<template>
  <div id="app">
    <div class="nav-links">
      <div class="nav-link"><router-link to="/">Home</router-link></div>
      <div class="nav-link"><router-link to="/entries">Entries</router-link></div>
      <div class="nav-link"><router-link to="/entries/new">New</router-link></div>
    </div>
    <transition appear name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: navy;
  margin-top: 50px;
}

.nav-links {
  text-align: right;
  padding-right: 50px;
  margin-bottom: 50px;
}

.nav-link {
  display: inline;
  margin-right: 10px;
  font-weight: bold;
  &:last {
    margin-right: 0;
  }
}

a {
  color: teal;
  text-decoration: none;
}

.fade- {
  &enter-active, &leave-active {
    transition: opacity .25s;
  }
  &enter-active {
    transition-delay: .25s;
  }
  &enter, &leave-active {
    opacity: 0
  }
}

input, textarea {
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid gray;
  width: 100%;
  &:focus {
    outline: none;
    color: teal;
    border: 1px solid teal;
  }
}

.error {
  color: red;
}

button, .button {
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-color: teal;
  color: white;
  border: none;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  &.red {
    background-color: red;
  }
}

</style>
