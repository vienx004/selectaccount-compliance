<template>
  <div id="app">
    <div>
      <b-navbar sticky-top variant="light">
      <b-navbar-brand class="navbar-brand" href='#'><img style="height:50%;width:50%;" src="/src/assets/selectaccount-text.png"></b-navbar-brand>

        <b-navbar-nav>
          <span>
            <b-nav-item href="/create">Create</b-nav-item>
            <b-nav-item href="/track">Track</b-nav-item>
            <b-nav-item href="/knowledge">Knowledge</b-nav-item>
          </span>
        </b-navbar-nav>
    
    </b-navbar>
    </div>
    <header>
      <img style="height:45%;width:45%" src="/src/assets/select-account-logo.png">
    <hr>
    </header>

  <create-component></create-component>

  </div>
</template>

<script>
import CreateComponent from './components/create.vue'

export default {
  name: 'app',
  data () {
    return {
      message: [{username:'', short_desc:'', desc:''}]
    }
  },
  components: {
    CreateComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.create-component {
  text-align: left;
  padding-left: 5%;
  top: 0;
}

.submit {
  text-align: right;
  padding-right: 15%;
}

header {
  background-color: #53ad3c;
  padding-top:10px;
}

label {
  font-weight: bold;
}

.navbar-brand {
  text-align: left;
  margin: 0;
  padding-bottom: 1%;
}

b-nav-item {
  color : white;
}
</style>
