//Load in the endpoints
//const test = require('./endpoints/test');
const getFirst = require('./endpoints/getFirst');
const getLast = require('./endpoints/getLast');
const removeLast = require('./endpoints/removeLast');
const getSubString = require('./endpoints/getSubString');
const timestamp = require('./endpoints/timestamp');
const currencyFormat = require('./endpoints/currencyFormat');
const convertNum = require('./endpoints/convertNum');
const transcript = require('./endpoints/transcript');
const regex = require('./endpoints/regex');
const vc = require('./endpoints/vc');
const getRoleCount = require('./endpoints/getRoleCount');
const getMemberRoles = require('./endpoints/getMemberRoles');
const tempRole = require('./endpoints/tempRole');
const random = require('./endpoints/random');

//Load in the modules
const dotenv = require('dotenv');
const express = require('express');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.post('/test', test);

// Returns a string based on a regular expression
app.post('/regex', regex);

// Gets the first X characters in a string, where X is the number passed to count
app.post('/getfirst', getFirst);

// Gets the last X characters in a string, where X is the number passed to count
app.post('/getlast', getLast);

// Removes the last X characters from a string, where X is the number passed to count
app.post('/removelast', removeLast);

// Gets the specified characters in a string from a start point and end point using start, end
app.post('/getsubstring', getSubString);

// Generate a unix timestamp based on a specific date and time or days in the future
app.post('/timestamp', timestamp);

// formats the number into a currency format, eg: 1000 = 1,000
app.post('/currencyformat', currencyFormat);

// Converts numbers from full to short or vice versa, eg: 1000 = 1k OR 1k = 1000
app.post('/convertnum', convertNum);

// Add content to transcripts
app.post('/transcript', transcript);

// Gets the number of members who have a role
app.post('/getrolecount', getRoleCount);

// Will join a voice channel and check if it's alone
app.post('/vc', vc);

// List the roles of a member
//app.post('/getmemberroles', getMemberRoles);

// Temporarily add a role to a user
app.post('/temprole', tempRole);

// Generate random characters based on customisations
app.get('/random', random);


app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
