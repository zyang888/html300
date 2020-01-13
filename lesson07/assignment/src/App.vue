<template>
  <div id="app">
    <nav>
    <img
      src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/p960x960/12006472_1049073615127428_5637519699861230041_o.jpg?_nc_cat=110&_nc_oc=AQnEerYvZdDFwM---fIDh8opxiS3cVH1Qt4ssJPb_OYSVx4WVrxDctJa7dIQd-2vwxVmGpULGs_sO88ZogB5hhI_&_nc_ht=scontent-sea1-1.xx&oh=b17190c371e0a77d0e9201f11fc12399&oe=5EA91EAD"
      alt="nav-pic">
    <router-link to="/" class="text-primary">Home</router-link>
    <router-link to="/Images" class="text-success">Images</router-link>
    <router-link to="/Accordion" class="text-danger">Accordion</router-link>
    <router-link to="/Grid" class="text-warning">Grid</router-link>
  </nav>
  <b-container>
    <router-view/>
  </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

#app {
  // global style
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin-left: 160px;
}

nav {
  height: 100%;
  /* Full-height: remove this if you want "auto" height */
  width: 160px;
  /* Set the width of the sidebar */
  position: fixed;
  /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1;
  /* Stay on top */
  top: 0;
  /* Stay at the top */
  left: 0;
  /* Black */
  overflow-x: hidden;
  /* Disable horizontal scroll */
  padding-top: 20px;
  border-right-style: solid;
  border-color: grey;
  text-align: center;

  img {
    border-radius: 50%;
    width: 80%;
  }

  a {
    text-decoration: none;
    font-size: 25px;
    display: block;
    color: black;
  }

  a:hover {
    color: #f1f1f1;
  }
}

</style>
