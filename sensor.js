// displayElem = document.getElementById('sensorData');

// try {
//     const sensor = new AbsoluteOrientationSensor({frequency: 60, referenceFrame: "device"});
//     displayElem.innerHTML = `Sensor data: ${JSON.stringify(sensor)}`;
// }
// catch(e) {
//     displayElem.innerHTML = e;
// }


const sensor = new AbsoluteOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "magnetometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // …
  } else {
    console.log("No permissions to use AbsoluteOrientationSensor.");
  }
});