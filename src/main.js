import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// blinker Customizer相关
window.addEventListener("message", receiveMessage, false);
Vue.prototype.appData = {}
Vue.prototype.BlinkerHeaderHeight = ''
Vue.prototype.send2Device = function (data) {
  window.parent.postMessage(data, "*");
}
window.parent.postMessage({}, "*");

function receiveMessage(e) {
  // console.log(JSON.stringify(e.data));
  if (e.data == 'undefined' || e.data == null || JSON.stringify(e.data).indexOf('webpack') > -1) return
  if (typeof e.data.headerHeight != "undefined") {
    Vue.BlinkerHeaderHeight = e.data.headerHeight + "px";
    console.log(Vue.BlinkerHeaderHeight);
  } else {
    console.log(e.data);
    Object.assign(Vue.appData, e.data);
  }
}

// export function getState() {
//   send2Device({ get: "state" });
// }

// export function tapButton() {
//     if (Vue.appData.deviceData.switch == "on")
// send2Device({ switch: "off" });
//     else send2Device({ switch: "on" });
// }


