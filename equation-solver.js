// t=sqrt((2(s/u)-(v-u))/2)
//v=u+at

'use strict';

debugger;
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
var i = 1
var ii = 1/0
while (i < ii) {
    var hiyu = getText('Enter the known values(v/u/a/s/t)(minimum three values, with commas): ')

    if (hiyu == 'u,a,t' || hiyu == 'u,t,a' || hiyu == 't,u,a' || hiyu == 't,a,u' || hiyu == 'a,u,t' || hiyu == 'a,t,u') {
        var u1 = getNumber('Enter the value of u: ')
        var a1 = getNumber('Enter the value of a: ')
        var t1 = getNumber('Enter the value of t: ')
        var q1 = getText('What do u want to find,s/v? ')
        if (q1 == 's') {
            var u1t1 = u1 * t1
            var t1t1 = t1 * t1
            var a1t1 = a1 * t1t1 //correct
            var a1t1t1 = a1t1 / 2
            var s1 = u1t1 + a1t1t1
            console.log('the value of s is: ' + s1 + ' units')
        }
        if (q1 == 'v') {
            var a11t11 = a1 * t1
            var v1 = u1 + a11t11
            console.log('The value of v is: ' + v1 + ' a111t11=' + a11t11)
        }
    }//correct1
    else if (hiyu == 's,a,t' || hiyu == 's,t,a' || hiyu == 'a,t,s' || hiyu == 'a,s,t' || hiyu == 't,a,s' || hiyu == 't,s,a') {
        var s2 = getNumber('Enter the value of s: ')
        var a2 = getNumber('Enter the value of a: ')
        var t2 = getNumber('Enter the value of t: ')
        var q2 = getText('What do u want to find,u/v? ')
        if (q2 == 'u') {
            var s2t2 = s2 / t2
            var a2t2 = a2 * t2
            var a2t22 = a2t2 / 2
            var u2 = s2t2 - a2t22
            console.log('The value of u is: ' + u2 + ' units')
        }
        if (q2 == 'v') {
            /* var s2t22 = s2 / t2
             var a22t2 = a2 * t2
             var a2t232 = 1.5 * a22t2
             var v2 = a2t232 + s2t22
             */
            var s2t22 = s2 / t2
            var a22t2 = a2 * t2
            var a2t232 = 0.5 * a22t2
            var v2 = a2t232 + s2t22
            console.log('The value of v is: ' + v2 + ' units')
        }
    }//correct2
    else if (hiyu == 'u,s,t' || hiyu == 'u,t,s' || hiyu == 't,s,u' || hiyu == 't,u,s' || hiyu == 's,u,t' || hiyu == 's,t,u') {
        var s3 = getNumber('Enter the value of s: ')
        var u3 = getNumber('Enter the value of u: ')
        var t3 = getNumber('Enter the value of t: ')
        var q3 = getText('What do u want to find,a/v? ')
        if (q3 == 'a') {
            /* var t3t3 = t3 * t3
         var s32 = s3 * 2
            var s32t3t3 = s32 / t3t3
            var u3t3 = u3 / t3
            var a3 = s32t3t3 - u3t3*/
            var a3 = ((2 * s3) / (t3 * t3)) - (2 * u3 / t3)

            console.log('The value of a is: ' + a3 + ' units')
            //correct


        }
        if (q3 == 'v') {
            var v3 = (2 * s3) / t3
            console.log('the value of v is: ' + v3 + ' units')
        }
    }//correct3
    else if (hiyu == 's,u,a' || hiyu == 's,a,u' || hiyu == 'a,u,s' || hiyu == 'a,s,u' || hiyu == 'u,a,s' || hiyu == 'u,s,a') {
        var s4 = getNumber('Enter the value of s: ')
        var u4 = getNumber('Enter the value of u: ')
        var a4 = getNumber('Enter the value of a: ')
        var q4 = getText('What do u want to find,t/v? ')
        if (q4 == 't') {
            /*var u4u4 = u4 * u4
            var as2 = 2 * a4 * s4
            var squrt21as = Math.sqrt(u4u4 + as2)
            var u4sqrt2as = u4 - squrt21as
            var t4 = u4sqrt2as / a4
           */
            var uuu = u4 * u4
            var t4 = (u4 - Math.sqrt(uuu + 2 * a4 * s4)) / a4
            var t45 = (u4 + Math.sqrt(uuu + 2 * a4 * s4)) / a4
            // correct

            if (t4 > 0 && t45 > 0) {
                console.log('The anwser is: ' + t4 + ' units or ' + t5 + ' units')
            } else if (t4 > 0 && t45 < 0) {
                console.log('The anwser is: ' + t4 + ' units')
            } else if (t45 > 0 && t4 < 0) {
                console.log('The anwser is: ' + t45 + ' units')
            } else if (t4 > 0 && t45 > 0 && t4 == t45) {
                console.log('The anwser is: ' + t4 + ' units')

            }
        } if (q8 == 'v') {
            var v81 = Math.sqrt((u8 * u8) + 2 * a8 * s8)
            var v82 = (Math.sqrt((u8 * u8) + 2 * a8 * s8)) * (-1)
            console.log('The value of v is: ' + v81 + ' or ' + v82)
        }
    }//correct4
    else if (hiyu == 'v,a,t' || hiyu == 'v,t,a' || hiyu == 't,a,v' || hiyu == 't,v,a' || hiyu == 'a,v,t' || hiyu == 'a,t,v') {
        var v5 = getNumber('Enter the value of v: ')
        var t5 = getNumber('Enter the value of t: ')
        var a5 = getNumber('Enter the value of a: ')
        var q5 = getText('What do u want to find,s/v? ')
        if (q5 == 'v') {
            var u5 = v5 - (a5 * t5)
            console.log('The value of u is: ' + u5 + ' units')
        }
        if (q5 == 's') {
            var s5 = ((v5 - (a5 * t5)) * t5) + (0.5 * (a5 * (t5 * t5)))
            console.log('The answer is: ' + s5 + ' units')//correct
        }

    }//correct5
    else if (hiyu == 'v,u,t' || hiyu == 'v,t,u' || hiyu == 't,u,v' || hiyu == 't,v,u' || hiyu == 'u,t,v' || hiyu == 'u,v,t') {
        var v6 = getNumber('Enter the value of v: ')
        var t6 = getNumber('Enter the value of t: ')
        var u6 = getNumber('Enter the value of u: ')
        var q6 = getText('What do u want to find,s/a? ')
        if (q6 == 'a') {
            var a6 = (v6 - u6) / t6
            console.log('The value of a is: ' + a6 + ' units')//correct
        }
        if (q6 == 's') {
            var s61 = ((u6 * t6) / 2) + ((v6 * t6) / 2)
            // var s62 = -((u6 * t6) / 2) + ((v6 * t6) / 2)//correct
            // var s63 = ((u6 * t6) / 2) - ((v6 * t6) / 2)
            // var s64 = (-(u6 * t6) / 2) - ((v6 * t6) / 2)
            console.log('The answer is: ' + s61 + ' units')
        }
    }//correct6
    else if (hiyu == 'v,a,u' || hiyu == 'v,u,a' || hiyu == 'u,v,a' || hiyu == 'u,a,v' || hiyu == 'a,v,u' || hiyu == 'a,u,v') {
        var v7 = getNumber('Enter the value of v: ')
        var a7 = getNumber('Enter the value of a: ')
        var u7 = getNumber('Enter the value of u: ')
        var q7 = getText('What do u want to find,s/t? ')
        if (q7 == 't') {
            var t7 = (v7 - u7) / a7//correct
            console.log('The answer is: ' + t7 + ' units')
        }
        if (q7 == 's') {
            var s7 = ((v7 * v7) - (u7 * u7)) / (2 * a7)
            console.log('The answer is: ' + s7 + ' units')//correct
        }
    }//correct7
    else if (hiyu == 'v,a,s' || hiyu == 'v,s,a' || hiyu == 'a,v,s' || hiyu == 'a,s,v' || hiyu == 's,a,v' || hiyu == 's,v,a') {
        var v9 = getNumber('Enter the value of v: ')
        var a9 = getNumber('Enter the value of a: ')
        var s9 = getNumber('Enter the value of s: ')
        var q9 = getText('What do u want to find,u/t? ')
        if (q9 == 'u') {
            var u91 = Math.sqrt((v9 * v9) + (2 * a9 * s9))
            var u92 = Math.sqrt((v9 * v9) + (2 * (a9 * s9)) * (-1))//correct
            console.log('The value of u is: ' + u91 + ' or ' + u92 + ' units')
        }

        if (q9 == 't') {
            var t91 = (-v9 + Math.sqrt((v9 * v9) + (8 * a9 * s9))) / (2 * a9)
            var t92 = (-v9 - Math.sqrt((v9 * v9) + (8 * a9 * s9))) / (2 * a9)

            if (t91 > 0 && t92 > 0) {
                console.log('The anwser is: ' + t91 + ' units or ' + t92 + ' units')
            } else if (t91 > 0 && t92 < 0) {
                console.log('The anwser is: ' + t91 + ' units')//correct
            } else if (t91 < 0 && t92 > 0) {
                console.log('The anwser is: ' + t92 + ' units')
            } else if (t4 > 0 && t45 > 0 && t4 == t45) {
                console.log('The anwser is: ' + t4 + ' units')

            }
        }
    }//correct8
    else if (hiyu == 'v,s,t' || hiyu == 'v,t,s' || hiyu == 's,t,v' || hiyu == 's,v,t' || hiyu == 't,v,s' || hiyu == 't,s,v') {
        var v10 = getNumber('Enter the value of v: ')
        var t10 = getNumber('Enter the value of t: ')
        var s10 = getNumber('Enter the value of s: ')
        var q10 = getText('What do u want to find,u/t? ')
        if (q10 == 'a') {
            var a10 = ((2 * s10) / (t10 * t10)) - (v10 / t10)
            console.log('The value of u is: ' + a10 + ' units')
        }
        if (q10 == 'u') {
            var u10 = ((2 * s10) / t10) - v10

            console.log('The value of u is: ' + u10)

        }
    }//correct9
    else if (hiyu == 's,u,v' || hiyu == 's,v,u' || hiyu == 'u,v,s' || hiyu == 'u,v,s' || hiyu == 'v,u,s' || hiyu == 'v,s,u') {
        var v11 = getNumber('Enter the value of v: ')
        var u11 = getNumber('Enter the value of u: ')
        var s11 = getNumber('Enter the value of s: ')
        var q11 = getText('What do u want to find,a/t? ')
        if (q11 == 'a') {
            var a11 = ((v11 * v11) - (u11 * u11)) / (2 * s11)
            console.log('The value of a is: ' + a11 + ' units')
        }
        if (q11 == 't') {
            var t11 = (2 * s11) / (u11 + v11)
            console.log('The value of t is: ' + t11 + ' units')
        }

    }//correct10
    else  {
        console.log(colors.error('Command not defined'))
    }
    i++;
}    

