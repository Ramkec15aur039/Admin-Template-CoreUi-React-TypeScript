const environmentList = [
  'http://localhost:4040/',                           //local      = 0
  'https://pingya.herokuapp.com/',                    //develop    = 1
  'https://administrator.pingya.staging.pacificmedicalgroup.org/api/', //staging    = 2
  // 'https://pingyatest.pacificmedicalgroup.org/api/',  //testing    = 3  
  'https://administrator.pingya.pacificmedicalgroup.org/api/'       //production = 4
];

const env = 0// Place your environment number here

const hostConfig = {  
  WEB_URL: process.env.url, 
  API_URL: environmentList[env] + "v1/",
};

const api = environmentList[env];

//time interval to check online or offline
const activeStatusCallTime = 1000 * 60 * 4

//if idle for this much time go to idle screen 
const idleTime = 1000 * 60 * 5// millisec * sec * min * hr * days

//after idle wait this much time before logout 
const waitTimeInTimeOutScreen = 1000 * 60 * 2

//change this value to increase or decrease page refresh interval;
const refreshInterval = 1000 * 60 * 3 //(3min) In milliseconds 

const homeURL = "http://my.pacificmedicalgroup.org"  //Logout to this URL

const stagingHomeURL = "https://staging.pacificmedicalgroup.org"

export {
  hostConfig,
  refreshInterval,
  api,
  env,
  homeURL,
  stagingHomeURL,
  idleTime,
  activeStatusCallTime,
  waitTimeInTimeOutScreen,
};
