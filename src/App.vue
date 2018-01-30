<template>
  <div id="app">
    <div>
      <b-navbar sticky-top variant="light">
      <b-navbar-brand class="navbar-brand"><router-link to="/"><img style="height:40%;width:40%;" src="/src/assets/selectaccount-text.png"></router-link></b-navbar-brand>

        <b-navbar-nav>
          <span>
            <b-nav-item><router-link class="nav-pills" tag="li" to="/create" exact>Create</router-link></b-nav-item>
            <b-nav-item><router-link class="nav-pills" tag="li" to="/track" exact>Track</router-link></b-nav-item>
            <b-nav-item><router-link class="nav-pills" tag="li" to="/Knowledge" exact>Knowledge</router-link></b-nav-item>
          </span>
        </b-navbar-nav>
    
    </b-navbar>
    </div>
    <header>
      <img style="height:30%;width:30%" src="/src/assets/select-account-logo.png">
    <hr>
    </header>
<router-view>

</router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: [{username:'', short_desc:'', desc:''}]
    }
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

.nav-pills {
  color: #53ad3c;
}

</style>
