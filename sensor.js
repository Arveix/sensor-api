displayElem = document.getElementById('sensorData');

const sensor = new AbsoluteOrientationSensor({frequency: 60, referenceFrame: "device"});

console.log(sensor);

displayElem.innerHTML = sensor;