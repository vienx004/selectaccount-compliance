<template>
  <div class="home-component">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="3" class="tile-background">
          <router-link to="/create" exact>
            <i class="material-icons icon-btn">insert_drive_file</i>
            <hr style="background-color:white">
          </router-link>
          <p>Open Your Case</p>
          </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="tile-background">
          <router-link to="/Track" exact>
            <i class="material-icons icon-btn">folder_open</i>
            <hr style="background-color:white">
          </router-link>
          <p>Track Your Case</p>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="tile-background">
          <router-link to="/Knowledge" exact>
            <i class="material-icons icon-btn">find_in_page</i>
            <hr style="background-color:white">
          </router-link>
          <p>Knowledge</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  
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

.home-component {
  background-image: url('/src/assets/home-image.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100vh;
  //opacity: .6;  //background: rgba(75,175,80,.1);
  top: 0;
}

.tile-background {
  background-color: rgb(1, 1, 80);
  //background-color: #53ad3c;
  padding: 15px;
  margin-top: 10%;
  color: white;
}

.icon-btn {
  color:white;
  font-size: 76px;
}

label {
  font-weight: bold;
}

</style>