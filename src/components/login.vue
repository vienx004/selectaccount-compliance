<template>
  <div id="login">
      <h3>Log In</h3>
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type=" password" placeholder="Password">
      <b-button @click="signIn" class="btn" variant="success">Log In</b-button>
  </div>
</template>

<script>
import firebase from 'firebase'

    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            signIn() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function(user){
                        alert('Sign in successful')
                    },
                    function(err){
                        alert('Something went wrong. ' + err.message)
                    }
                )
            }
        }
    }
</script>

<style scoped>
</style>