export let appData = {};

window.addEventListener("message", receiveMessage, false);

send2Device({});

export let blinkerData = {

}

export function send2Device(data) {
    window.parent.postMessage(data, "*");
}

export function getState() {
    send2Device({ get: "state" });
}

export function tapButton() {
    if (appData.deviceData.switch == "on") send2Device({ switch: "off" });
    else send2Device({ switch: "on" });
}

function receiveMessage(e) {
    if (typeof e.data.headerHeight != "undefined") {
        let header = document.getElementById("header");
        header.style.height = e.data.headerHeight + "px";
    }
    Object.assign(appData, e.data);
    showBox.innerHTML = generateRes(JSON.stringify(appData));
}
