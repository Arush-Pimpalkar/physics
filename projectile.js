var getNumber = require('./prompt').getNumber
var getText = require('./prompt').getText
var colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
console.log('What do you know(launch angle,vertical displacement,horizantal displacement,total time, speed of launch)?')
var hyui = getText()
if (hyui == 'launch angle,speed of launch' || hyui == 'speed of launch,launch angle') {
    var a1 = getNumber('Enter the launch angle: ')
    var ls1 = getNumber('Enter the launch speed: ')
    var sy1 = (ls1 * (Math.sin(a1 / 180 * Math.PI))) / 19.6
    var tt1 = ((ls1 * (Math.sin(a1 / 180 * Math.PI))) / 9.8) * 2
    var sx1 = tt1 * (ls1 * (Math.cos(a1 / 180 * Math.PI)))
    console.log('The horizantal displacement is: ' + sx1 + 'unit')
    console.log('The vertical displacement is: ' + sy1 + 'unit')
    console.log('The total time is: ' + tt1 + 'unit')
}
if (hyui = ) 