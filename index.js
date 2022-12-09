const fs = require('fs');


const key = fs.readFileSync('./ssl/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./ssl/localhost/localhost.crt');

const express = require('express');
const app = express();


app.get('/', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\index.html');
});

app.get('/media/beep.mp3', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\media\\beep.mp3');
});

app.get('/src/SoundController.js', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\src\\SoundController.js');
});

app.get('/src/OrientationController.js', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\src\\OrientationController.js');
});

app.get('/src/GpsController.js', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\src\\GpsController.js');
});

app.get('/src/ArrowController.js', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\src\\ArrowController.js');
});

app.get('/src/style.css', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\style\\style.css');
});

app.get('/src/MapController.js', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\src\\MapController.js');
});

app.get('/src/http_www.openlayers.org_api_OpenLayers.js', (req, res, next) => {
  res.status(200).sendFile('D:\\Javascript_Projects\\SoundSpatialization\\src\\http_www.openlayers.org_api_OpenLayers.js');
});

//----

//----



const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});


console.log('Path of file in parent dir:', require('path').resolve(__dirname, './app.js'));
