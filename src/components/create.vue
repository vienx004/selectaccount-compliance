<template>
    <div class="create-component">
      <label>Username:</label>
      <br>
        <b-col sm="3"><b-form-input v-model='message.username' type="text" :state="userNameState"></b-form-input></b-col>
      <br>
      <label>Short Description:</label>
      <br>
        <b-col sm="10"><b-form-textarea :required="true" :rows="3" v-model='message.short_desc' :state="shortDescState"></b-form-textarea></b-col>
      <br>
      <label>Description:</label>
      <br>
        <b-col sm="10"><b-form-textarea :rows="5" v-model='message.desc' :state="descState"></b-form-textarea></b-col>
      <br>

  <div class="submit">
    <b-button variant="success">Submit</b-button>
  </div>

  <p>{{message['username']}}</p>
  <br>
  <p>{{message['short_desc']}}</p>
  <br>
  <p>{{message['desc']}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userNameState(){
      if(typeof this.message.username != "undefined"){
        return this.message.username.length > 0 ? true : false
      }else{
        return false
      }
    },
    shortDescState(){
      if(typeof this.message.short_desc != "undefined"){
        return this.message.short_desc.length > 0 ? true: false
      }else{
        return false
      }
    },
    descState(){
      if(typeof this.message.desc != "undefined"){
        return this.message.desc.length > 0 ? true : false
      }else{
        return false
      }
    }
  },
  data () {
    return {
      message: [{username:'', short_desc:'', desc:''}]
    }
  },
}
</script>

<style lang="scss">

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

label {
  font-weight: bold;
  color: #53ad3c;
}

</style>
