const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Set static path
app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.json());

const publicVapidKey = 'BPIf7Ydk8G5oaCkQidJZGWPKY6Vm6uN5e0eq3XOprktgGav2dURmVDgPBrAMU6C6XMu5LiY2rYY400u0cibVK5k';
const privateVapidKey = 'TdGSFdm7cosCWY4po1AYqiSnpYk3BIY5jl4BK6P3WII';

webpush.setVapidDetails('mailto: test@test.com', publicVapidKey, privateVapidKey);

//Subscribe route
app.post('/subscribe', (req, res) => {
  //get subscription object
  const subscription = req.body;

  //send status
  res.status(201).json({});

  //create a payload
  const payload = JSON.stringify({title: 'Push test'});

  //pass the object into sendNotification function
  webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));