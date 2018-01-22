<template>
  <div class="track-component">
      <b-table v-bind:style="styleObj" striped bordered outlined hover :items="message" :fields="fields">

      </b-table>
  </div>
</template>

<script>
export default {
   data () {
    return {
      fields: [
          {key: 'username', sortable: true}, 
          {key: 'short_desc', sortable: false}, 
          {key: 'desc', sortable: false}],
      styleObj: {
          color: '#53ad3c'
      },
      message: [
          {username:'a0m002', short_desc:'This is short_desc', desc:'This is a long description'},
          {username:'a0m003', short_desc:'This is short_desc', desc:'This is a long description'},
          {username:'a0m004', short_desc:'This is short_desc', desc:'This is a long description'},
        ],
    }
  },
  methods:{
    fetchTickets(){
      this.$http.get('https://selectaccount-compliance.firebaseio.com/ticket.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const ticketArray = [];
          for(let key in data){
            ticketArray.push(data[key]);
          }
          this.message = (ticketArray);
        })
    }
  },
  mounted: function(){
    this.fetchTickets();
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

.track-component {
  text-align: left;
  padding-left: 5%;
  padding-right: 5%;
  top: 0;
}

.submit {
  text-align: right;
  padding-right: 15%;
}

label {
  font-weight: bold;
}
</style>
