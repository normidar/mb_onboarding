function countdown () {
    count_down_number = input.runningTimeMicros()
    for (let index = 0; index < 200; index++) {
        now_count_down = Math.floor((input.runningTimeMicros() - count_down_number) / 1000000)
        if (now_count_down > 10) {
            mode = "select"
            break;
        }
        show_number(10 - now_count_down)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    // if (mode == "select") {
    //     now_select += -1
    //     if (now_select < 0) {
    //         now_select = 24
    //     }
    // }
    new Dice().onAClicked()
})
function show_point (数値: number) {
    led.plot(get_x(数値), get_y(数値))
}
input.onGesture(Gesture.Shake, function () {
    if (now_select == 0) {
        mode = "sinan"
    } else if (now_select == 1) {
        mode = "temperature"
    } else if (now_select == 2) {
        mode = "volume"
    } else if (now_select == 3) {
        mode = "saikoro"
        basic.showNumber(randint(1, 6))
    } else if (now_select == 4) {
        mode = "countdown"
        countdown()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
        show_point(now_select)
    }
})
function show_volume () {
    basic.pause(100)
    basic.clearScreen()
    while (カウンター <= Math.floor(input.lightLevel() / 4)) {
        show_point(カウンター)
        カウンター += 1
    }
}
input.onButtonPressed(Button.AB, function () {
    if (mode == "select") {
        now_select += -5
        if (now_select < 0) {
            now_select = now_select + 25
        }
    } else {
        mode = "select"
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == "select") {
        now_select += 1
        if (now_select >= 25) {
            now_select = 0
        }
    }
})
function get_y (数値2: number) {
    return Math.floor(数値2 / 5)
}
function show_number (数値3: number) {
    if (数値3 < 10 && 数値3 >= 0) {
        basic.showNumber(数値3)
    } else if (数値3 == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (数値3 == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (数値3 == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (数値3 == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数値3 == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (数値3 == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数値3 == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (数値3 == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (数値3 == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (数値3 == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数値3 == 20) {
        basic.showLeds(`
            # # . . .
            . # # # #
            # # # . #
            # . # # #
            # # . . .
            `)
    } else if (数値3 == 21) {
        basic.showLeds(`
            # # # . #
            . . # . #
            # # # . #
            # . . . #
            # # # . #
            `)
    } else if (数値3 == 22) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #
            `)
    } else if (数値3 == 23) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (数値3 == 24) {
        basic.showLeds(`
            # # # . #
            . # # . #
            # # # # #
            # . . . #
            # # . . #
            `)
    } else if (数値3 == 25) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (数値3 == 26) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . # #
            # # . . .
            `)
    } else if (数値3 == 27) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . . #
            # . . . #
            # # . . #
            `)
    } else if (数値3 == 28) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    } else if (数値3 == 29) {
        basic.showLeds(`
            # # . . .
            . # . # #
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (数値3 == 30) {
        basic.showLeds(`
            # # . . .
            . # # # #
            # # # . #
            . # # # #
            # # . . .
            `)
    } else if (数値3 == 31) {
        basic.showLeds(`
            # # # . #
            . . # . #
            # # # . #
            . . # . #
            # # # . #
            `)
    } else if (数値3 == 32) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            . # . # .
            # # . # #
            `)
    } else if (数値3 == 33) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            . # . . #
            # # . # #
            `)
    } else if (数値3 == 34) {
        basic.showLeds(`
            # # . . .
            . # # . #
            # # # # #
            . # . . #
            # # . . #
            `)
    } else if (数値3 == 35) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            . # . . #
            # # . # #
            `)
    } else if (数値3 == 36) {
        basic.showLeds(`
            # # . . .
            . # . # #
            # # . # .
            . # . # #
            # # . # #
            `)
    } else if (数値3 == 37) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . . #
            . # . . #
            # # . . #
            `)
    } else {
        basic.showNumber(数値3)
    }
}
function show_sinan () {
    if (input.compassHeading() <= 22.5 || input.compassHeading() > 337.5) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() <= 112.5 && input.compassHeading() > 67.5) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() <= 202.5 && input.compassHeading() > 157.5) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() <= 292.5 && input.compassHeading() > 247.5) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() <= 67.5 && input.compassHeading() > 22.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() <= 157.5 && input.compassHeading() > 112.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() <= 247.5 && input.compassHeading() > 202.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (input.compassHeading() <= 337.5 && input.compassHeading() > 292.5) {
        basic.showArrow(ArrowNames.SouthWest)
    }
}
function get_x (数値32: number) {
    return 数値32 % 5
}
let カウンター = 0
let now_count_down = 0
let count_down_number = 0
let mode = "select"
let now_select = 0
now_select = randint(0, 24)
show_point(now_select)
basic.forever(function () {
    new Dice().onAClicked()
    // if (mode == "sinan") {
    //     show_sinan()
    // } else if (mode == "temperature") {
    //     show_number(input.temperature())
    // } else if (mode == "volume") {
    //     show_volume()
    // } else if (mode == "select") {
    //     basic.clearScreen()
    //     show_point(now_select)
    // } else {
    	
    // }
})
