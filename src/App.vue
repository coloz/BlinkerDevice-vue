<template>
  <div id="app">
    <BlinkerDevice />
  </div>
</template>

<script>
import BlinkerDevice from "./components/BlinkerDevice";

export default {
  name: "App",
  components: {
    BlinkerDevice
  }
};
let appData = {};
let showBox = document.getElementById("showBox");
// window.addEventListener("message", receiveMessage, false);

// function send2Device(data) {
//   window.parent.postMessage(data, "*");
// }

// function getState() {
//   send2Device({ get: "state" });
// }

// function tapButton() {
//   if (appData.deviceData.switch == "on") send2Device({ switch: "off" });
//   else send2Device({ switch: "on" });
// }

// function receiveMessage(e) {
//   if (typeof e.data.headerHeight != "undefined") {
//     let header = document.getElementById("header");
//     header.style.height = e.data.headerHeight + "px";
//   }
//   Object.assign(appData, e.data);
//   showBox.innerHTML = generateRes(JSON.stringify(appData));
// }
// send2Device({});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
