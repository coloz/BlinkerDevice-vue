<template>
  <div id="app">
  <div v-bind:style="{marginTop:headerHeight}">

    <BlinkerDevice />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BlinkerDevice from "./components/BlinkerDevice";
// Vue.forceUpdate();
export default {
  name: "App",
  components: {
    BlinkerDevice
  },
  data(){
    return{
      headerHeight:Vue.BlinkerHeaderHeight
    }
  },
  updated: function() {
    setTimeout(()=>{
console.log(Vue.BlinkerHeaderHeight);
// this.$forceUpdate()
    },3000)
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
