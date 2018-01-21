<template>
  <div class="home-component container-fluid">
      <button></button>
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
  opacity: .5;
  //background: rgba(75,175,80,.1);
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