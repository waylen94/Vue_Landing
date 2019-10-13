<template>

  <div>

    <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>

      <div class = "row">

        <div class = "col-md-4 col-md-offset-4">
        <p></p>
      <p><a href="https://twitter.com/intent/tweet?text=https%3A//deco3801-mint.uqcloud.net/new/dist/index.html"><div class="twitter-hover social-slide"></div></a></p>
      <p><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//deco3801-mint.uqcloud.net/new/dist/index.html"><div class="facebook-hover social-slide"></div></a></p>
<!--       <p><a href="javascript::;"><div class="google-hover social-slide"></div></a></p> -->
      <p><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//deco3801-mint.uqcloud.net/new/dist/index.html&title=&summary=&source="><div class="linkedin-hover social-slide"></div></a></p>
        </div>



      </div>

      <div class = "row">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/j0GYXjT1Olg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class = "col-md-4 col-md-offset-4">
      </div>
      <router-view/>
      </div>

  </div>

</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      msg: '',
      msgType: '',
      msgShow: false
    }
  },
  beforeRouteEnter(to, from, next) {
    const fromName = from.name

    next(vm => {
    })
  },
  methods: {
    showMsg(msg, type = 'success') {
      this.msg = msg
      this.msgType = type
      this.msgShow = true
    }
  }
}
</script>

<style scoped>

</style>
