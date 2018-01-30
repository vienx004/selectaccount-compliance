<template>
    <div class="create-component">
      <b-form-group>
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
      <b-col sm="10">
        <v-select class="tag-border" multiple taggable push-tags v-model="tagged.name" :options="tags" label="name">
        </v-select>
      </b-col>
      <br>

      <div id="form-buttons">
        <span class="submit" @click="submit()">
          <b-button variant="success">Submit</b-button>
        </span>
        <span class="reset" @click="reset()">
          <b-button id="reset-btn" variant="danger">Reset</b-button>
        </span>
      </div>
      </b-form-group>

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
      message: [],
      tags: [
        {name:'Contribution'}, 
        {name:'Distribution'}, 
        {name:'Eligibility'}, 
        {name:'Internal Compliance Issue'},
        {name:'Job Aid Review'},
        {name:'Marketing Materials/Portal Language Review'},
        {name:'PHI HIPAA Disclosure Report'},
        {name:'Plan Compliance Question'},
        {name:'Privacy Breach'},
        {name:'Privacy Question'},
        {name:'Question from Agent'},
        {name:'Review Plan Document Language'},
        {name:'RFP Response'},
        {name:'Tax Form/Filing'},
        {name:'Tax Question'},
        {name:'Other'},
        ],
      tagged: []
    }
  },
  methods:{
    submit(){

      let payload = {
        username: this.message.username,
        short_desc: this.message.short_desc,
        desc: this.message.desc,
        tags: this.tagged.name};

      console.log(payload)

      this.$http.post('https://selectaccount-compliance.firebaseio.com/ticket.json', payload)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });

      this.reset();
    },
    reset(){
      this.message.username = '';
      this.message.short_desc = '';
      this.message.desc = '';
      this.tagged = [];
    },
  }
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

#form-buttons {
  text-align: right;
  padding-right: 10%;
}

.submit {
  text-align: right;
  padding-right: 1%;
}

#reset-btn {
  background-color: rgb(1, 1, 80);
  border-color: rgb(1, 1, 80);
}

.reset {
  text-align: right;
}

label {
  font-weight: bold;
  color: #53ad3c;
}

.tag-border {
  border: 1px solid #64d47e;
  border-radius: 4px;
}

</style>
