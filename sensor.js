displayElem = document.getElementById('sensorData');

try {
    const sensor = new AbsoluteOrientationSensor({frequency: 60, referenceFrame: "device"});
    displayElem.innerHTML = `Sensor data: ${sensor}`;
}
catch(e) {
    displayElem.innerHTML = e;
}
