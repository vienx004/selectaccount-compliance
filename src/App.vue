<template>
  <div id="app">
    <app-header :brand="brand"></app-header>
      <b-row>
        <b-col>
          <!--b-button class="btn btn-primary" @click="changeBrand('sa.png')">SelectAccount</b-button>
          <b-button class="btn btn-primary" @click="changeBrand('falcon.png')">Falcon</b-button-->
          <p>{{getUserEmail}}</p>
        </b-col>
      </b-row>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/header.vue'
import firebase from 'firebase'

export default {
  name: 'app',
  components: {
   'app-header': HeaderComponent
  },
  data () {
    return {
      brand: 'sa.png',
      user: [{email: 'select1@gmail.com', group:'sa.png'}, {email:'falcon1@gmail.com', group:'falcon.png'}]
    }
  },
  methods: {
    changeBrand(company){
      this.brand = company
    }
  },
  computed: {
    getUserEmail(){
      if(firebase.auth().currentUser == null){
        return 'sa.png'
      }
      let currentUser = firebase.auth().currentUser
      let obj = this.user.find(foo => foo.email === currentUser.email)
      return obj.group
    }   
  },
  created() {
       this.brand = this.getUserEmail;
       console.log('mounted')
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

</style>
