<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    'a': function () {
      this.$http.get('/api', []).then(function (data) { console.log(data) }, function (e) { alert(1) })
    },
    resize: function () {
      let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      let s = w / 1500
      document.getElementsByTagName('body')[0].style.transform = `scale(${s} , ${s} )`
    }
  },
  created: function () {
    this.resize()
    window.onresize = () => {
      this.resize()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
