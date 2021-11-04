<template>
  <div id="app"><center>
    <back-header/>
    <center><img src="./assets/logo1.png" width="110" height="100"></center>
    <router-view/>
    </center>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #ffffff;
  margin-top: 10px;
  background-image: url("./assets/bg2.jpg");
  background-attachment: fixed;
  background-size: cover; 
  background-repeat: repeat;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 5s;
}
.fade-enter-to{
  opacity: 1;
}
</style>
