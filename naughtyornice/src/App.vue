<template>
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <div class ="row">
        <h1><router-link to="/"><img src="./assets/TeamMint.png" width = "125px"></router-link>Team Mint </h1>

        </div>
        <router-link to="/auth/register" class="btn btn-primary btn-lg" role="button">Purchase</router-link>
         <router-link to="/statistics" class="btn btn-primary btn-lg" role="button">Administrator</router-link>
         <router-view/>
      </div>
    </div>
<!--     <TheFooter/> -->
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
  }
}


</script>

<style lang="scss">
$container-large-desktop: 1200px;
$btn-primary-bg: #00b5ad;
$btn-primary-border: #00b5ad;
$label-primary-bg: #00b5ad;
$pagination-active-bg: #00b5ad;
$pagination-active-border: #00b5ad;
$pagination-color: #00b5ad;
$input-border-focus: #00b5ad;
$link-color: #12c4c5;
$link-hover-color: #22ddde;
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: .05rem solid #e5e5e5;
}
.jumbotron .btn {
  padding: .75rem 1.5rem;
  font-size: 1.5rem;
}

.heading { border-bottom:3px solid #ddd; }
.twitter-hover {
    background-image: url('https://lut.im/SRoUJUn7V4/cORSlFIVBlR7M8Zv.png');
}
.facebook-hover {
    background-image: url('https://lut.im/9LlTfOBMjB/ccPwdiudyoF3x1wE.png');
}
.google-hover {
    background-image: url('https://lut.im/qGelLnYHZ3/dL1Hrnzyl7cMz14e.png');
}
.linkedin-hover {
    background-image: url('https://lut.im/JNIybEyJDx/6gAE6YPt35e7qMAB.png');
}

.social-slide {
  height: 48px;
  width: 48px;
  margin: 10px;
  float: left;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.social-slide:hover {
  background-position: 0px -48px;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.8);
}



@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
@import "./styles/extra";
</style>
