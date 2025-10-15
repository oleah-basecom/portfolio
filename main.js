const lightOff = "/images/licht_aus.png";
const lightOn = "/images/licht_an.png";
const switchOn = "/images/switch_off.svg";
const switchOff = "/images/switch_on.svg";


window.addEventListener("DOMContentLoaded", () => {
    let light = document.getElementById("light");
    let lightSwitch = document.getElementById("switch");
    let switchImage = document.getElementById("switch-image")

    function onClick() {
        if (light.src.endsWith(lightOff)) {
            light.src = lightOn;
            switchImage.src = switchOn;
        } else {
            light.src = lightOff;
            switchImage.src = switchOff;
        }
    }

    light.addEventListener("click", onClick);
    lightSwitch.addEventListener("click", onClick);
});
