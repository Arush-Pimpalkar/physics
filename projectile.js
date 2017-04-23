'use strict';

var prompt = require('readline-sync').question

var angle;
var initial_speed;
var initial_x_speed;
var initial_y_speed;

function getInput() {
    angle = prompt('Input launch angle in degrees : ');
    initial_speed = prompt('Input inital speed in m/s : ');
    console.log('Angle = ' + angle + '°' + ' initial_speed= ' + initial_speed + ' m/s');
}

function convertDegreesToRadians(degrees) {
    var radians = (Math.PI / 180) * degrees;
    console.log(degrees + ' degrees' + ' = ' + radians.toFixed(3) + ' radians');
    return radians;
}

function calculate_speed_components() {
    var angle_in_radians = convertDegreesToRadians(angle);
    initial_x_speed = initial_speed * Math.cos(angle_in_radians);
    initial_y_speed = initial_speed * Math.sin(angle_in_radians);
    console.log('Initial Horizantal Speed: ' + initial_x_speed.toFixed(3) + ' Initial Vertical Speed: ' + initial_y_speed.toFixed(3));
}

function calculate_distance_and_time_from_initial_speed_and_acceleration(initial_speed, final_speed, acceleration) {
    var distance = ((final_speed * final_speed) - (initial_speed * initial_speed)) / (2 * acceleration);
    var time = -(initial_speed / acceleration);
    console.log('Initial Vertical Speed: ' + initial_speed.toFixed(3) + ' Final Vertical Speed: ' + final_speed.toFixed(3) +
        ' distance: ' + distance.toFixed(3) + ' mtr(s) Time: ' + time.toFixed(3) + ' sec');

    var result = {};
    result.distance = distance;
    result.time = time;
    return result;
}


function calculate_distance_from_time_and_speed(speed, time) {
    var distance = speed * time;
    console.log('distance: ' + distance.toFixed(3) + ' speed: ' + speed.toFixed(3) +
        ' time: ' + time.toFixed(3));
}

getInput();
//angle = 45;
//initial_speed = 200;
calculate_speed_components();
/*var initial_speed = 100;
var final_speed = 0;
var acceleration = -9.8;
*/
var acceleration = -9.8;
var result = calculate_distance_and_time_from_initial_speed_and_acceleration(initial_y_speed, 0, acceleration);
//console.log('result = ' + JSON.stringify(result, null, 2))
//calculate_distance_from_time_and_speed(initial_x_speed, time)
