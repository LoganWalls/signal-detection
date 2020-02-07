window.baseHue = 180;

function updateColors(hueDifference) {
    document.getElementById("exampleA")
        .style.backgroundColor = `hsl(${window.baseHue + hueDifference}, 75%, 50%)`;
    document.getElementById("exampleB")
        .style.backgroundColor = `hsl(${window.baseHue - hueDifference}, 75%, 50%)`;
}

function runTrial() {
    var stimulus = document.getElementById("stimulus");
    var probSlider = document.getElementById("prob-slider");
    var choice = Math.random() > probSlider.value / 100 ? "A" : "B";
    console.log(choice);
    stimulus.style.backgroundColor = document.getElementById("example" + choice).style.backgroundColor;
    stimulus.style.opacity = 1;
    setTimeout(function () {
        stimulus.style.opacity = 0;
    }, 50);
}

window.onload = function () {
    var noiseSlider = document.getElementById("noise-slider");
    updateColors(((noiseSlider.value / 100)) * 100);
    noiseSlider.addEventListener("input", function (e) {
        updateColors(((e.target.value / 100)) * 100);
    });
    document.getElementById("start-button").addEventListener("click", runTrial);
};