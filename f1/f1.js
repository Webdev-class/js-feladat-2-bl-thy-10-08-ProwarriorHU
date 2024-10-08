
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive?';
async function f1 (lat, long, timeStr) {
  let tempavg = await fetch(APIAdress + `latitude=${lat}&longitude=${long}` +
    `&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`)
  .then(data => data.json())
  .then(data => data.hourly.temperature_2m)
  return Math.floor((tempavg.reduce((x, y) => x + y)) / (tempavg.length));
}

module.exports = f1;