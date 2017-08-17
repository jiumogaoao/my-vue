<template>
  <div class="input">
    <div class="label" v-if="label">{{label}} : </div>
    <input v-model="v" @change="change" :style="c"/>
    <div class="clear"></div>
    <div class="error">{{error}}</div>
    <div class="noEmpty" v-if="noEmpty">*</div>
  </div>
</template>

<script>
  export default {
    name: 'inputC',
    props: ['value', 'error', 'noEmpty', 'label'],
    data () {
      let color = this.error.length ? 'red' : '#000'
      return {
        v: this.value ? this.value : '',
        c: {
          border: `1px solid ${color}`
        }
      }
    },
    methods: {
      change: function () {
        console.log(this.v)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  position:relative;
  display: flex;
}
.error{
  position:absolute;
  top:0px;
  left: 110%;
  color: red;
}
.noEmpty{
  position: absolute;
  top:0px;
  left:-20px;
  color: red;
}
.clear{
  clear:both;
}
.label{
  float:left;
  width:60px;
  text-align: right;
  margin-right: 20px;
  flex-shrink:0;
}
input{
  float:left;
  flex-grow:1;
  width: 0px;
}
</style>
