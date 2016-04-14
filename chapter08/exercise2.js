function A() {
    //Every 30s
    console.log("Executing function A at 30s");
    return true;
}

function B() {
    //Every 60sec
    console.log("Executing function B at 60s");
    return true;
}

function C() {
    //Every 75sec
    console.log("Executing function C at 75s");
    return true;
}

function getGCD(a, b) {
    if (a < 0) a = -a;
    if (b < 0) b = -b;
    if (b > a) { var temp = a; a = b; b = temp; }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

var timers = {
    timerID: 0,
    timers: [],
    times: [],
    currentRun: 0,


    add: function (fn, to) {
        timers.gcd ? timers.gcd = getGCD(timers.gcd, to) : timers.gcd = to;
        this.timers.push(fn);
        this.times.push(to);
    },

    start: function () {
        if (this.timerID) return;
        (function runNext() {
            if (timers.timers.length > 0) {
                console.log(timers.gcd * timers.currentRun + " seconds");
                if (timers.currentRun != 0) {
                    for (var i = 0; i < timers.timers.length; i++) {
                        if ((timers.gcd * timers.currentRun) % timers.times[i] == 0) {
                            if (timers.timers[i]() === false) {
                                timers.timers.splice(i, 1);
                                i--;
                            }
                        }

                    }
                }

                timers.currentRun++;
                timers.timerID = setTimeout(runNext, timers.gcd * 1000);
            }
        })();
    },

    stop: function () {
        clearTimeout(this.timerID);
        this.timerID = 0;
    }
};


timers.add(A, 30);
timers.add(B, 60);
timers.add(C, 75);
timers.start();
