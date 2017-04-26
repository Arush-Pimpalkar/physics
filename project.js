var getNumber = require('./prompt').getNumber
var getText = require('./prompt').getText

var Initialspeed;
var Angle;
var TotalTime;
var HorizantalDistance;
var VerticalDistance;

// var angle;
// var initialspeed;


function getAngleAndInitialSpeed() {
    Angle = getNumber('Enter angle in degrees: ')
    Initialspeed = getNumber('Enter initial speed: ')
}

function getTotalTimeAndInitialSpeed() {
    TotalTime = getNumber('Enter Total Time in Seconds: ')
    Initialspeed = getNumber('Enter Initial Speed in m/s: ')
}

function getHorizantalDistanceAndInitialSpeed() {
    HorizantalDistance = getNumber('Enter Horizantal Distance in mtr(s): ')
    Initialspeed = getNumber('Enter Initial Speed in m/s: ')
}

function getVerticalDistanceAndInitialSpeed() {
    VerticalDistance = getNumber('Enter Vertical Distance in mtr(s): ')
    Initialspeed = getNumber('Enter Initial Speed in m/s: ')
}
function getAngleAndTotalTime() {
    Angle = getNumber('Enter angle in degrees: ')
    TotalTime = getNumber('Enter Total Time in Seconds: ')
}

function getAngleAndHorizantalDistance() {
    Angle = getNumber('Enter angle in degrees: ')
    HorizantalDistance = getNumber('Enter Horizantal Distance in mtr(s): ')
}

function getAngleAndVerticalDistance() {
    Angle = getNumber('Enter angle in degrees: ')
    VerticalDistance = getNumber('Enter Vertical Distance in mtr(s): ')
}

function getTotalTimeAndHorizantalSpeed() {
    TotalTime = getNumber('Enter Total Time in seconds: ')
    HorizantalDistance = getNumber('Enter Horizantal Distance in mtrs: ')
}

function getTotalTimeAndVerticalSpeed() {
    TotalTime = getNumber('Enter Total Time in seconds: ')
    VerticalDistance = getNumber('Enter Vertical Distance in mtr(s): ')
}

function getHorizantalSpeedAndVerticalSpeed() {
    HorizantalDistance = getNumber('Enter Horizantal Distance in mtrs: ')
    VerticalDistance = getNumber('Enter Vertical Distance in mtr(s): ')
}

var knownValues = getText('What do you know? ')
if (knownValues == 'ai') {
    getAngleAndInitialSpeed();
    var VerticalDistance1 = (((Initialspeed * Math.sin(Angle * (Math.PI / 180)))) * (Initialspeed * Math.sin(Angle * (Math.PI / 180)))) / 19.6
    var HorizantalDistance1 = ((Math.sin((2 * Angle) * (Math.PI / 180))) * (Initialspeed * Initialspeed)) / 9.8
    var TotalTime1 = (Initialspeed * Math.sin(Angle * (Math.PI / 180))) / 4.9
    console.log('The Total Time is: ' + TotalTime1.toFixed(3))
    console.log('The horizantal distance is: ' + HorizantalDistance1.toFixed(3))
    console.log('The vertical distance is: ' + VerticalDistance1.toFixed(3))
}//correct1

if (knownValues == 'hr') {
    getHorizantalSpeedAndVerticalSpeed()
    var TotalTime2 = (2 * VerticalDistance * (Math.cos(1 / Math.atan((HorizantalDistance / (4 * VerticalDistance)) * (Math.PI / 180))))) / (4.9 * VerticalDistance)
    console.log('The Total Time is: ' + TotalTime2.toFixed(3))
}



