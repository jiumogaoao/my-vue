<template>
  <div class="hello">
    <inputComponent value="" :error="err" noEmpty="true" class="input" label="sfsf" :cl="cl"/>
  </div>
</template>

<script>
import inputComponent from '@/components/inputComponent.vue'
export default {
  name: 'hello',
  components: {
    'inputComponent': inputComponent
  },
  data () {
    return {
      err: 'dddd',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeS: function () {
      this.$store.state.user.userName = 'jdjf'
    },
    changeSS: function () {
      this.$store.commit('showUserName')
    },
    cl: function (a) {
      this.err = a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{margin-left: 20px;width:300px;}
</style>
