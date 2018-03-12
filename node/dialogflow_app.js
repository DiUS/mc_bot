
// You can find your project ID in your Dialogflow agent settings
const projectId = 'mythic-groove-197823'; //https://dialogflow.com/docs/agents#settings
const sessionId = 'quickstart-session-id';
const query = 'hello';

const startMCBot = 'Hey Google can we talk to M C Bot?';
const upNext = 'Up Next we have';

const languageCode = 'en-US';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();

// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

console.log("staring up dialog flow got API setup!");

//const request = {
//  session: sessionPath,
//  queryInput: {
//    text: {
//      text: startMCBot,
//      languageCode: languageCode,
//    },
//  },
//};

const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: upNext,
      languageCode: languageCode,
    },
  },
};



// Send request and log result
sessionClient
  .detectIntent(request)
  .then(responses => {
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();

app.get('/hello', (req, res) => res.send('Hello McBot!'))

app.post('/webhook', function (req, res) {
  console.log("got a post request!!!!!!!!!", req);
  res.send('Got a new POST request')
})

app.use('/', express.static('/home/aa/projects/mc_bot/node/'));

app.listen(port, host);




