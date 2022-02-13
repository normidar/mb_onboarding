function show_temperature (数値: number) {
    if (数値 < 10 && 数値 >= 0) {
        basic.showNumber(input.temperature())
    } else if (数値 == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (数値 == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (数値 == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数値 == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (数値 == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数値 == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (数値 == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (数値 == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (数値 == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (数値 == 20) {
        basic.showLeds(`
            # # . . .
            . # # # #
            # # # . #
            # . # # #
            # # . . .
            `)
    } else if (数値 == 21) {
        basic.showLeds(`
            # # # . #
            . . # . #
            # # # . #
            # . . . #
            # # # . #
            `)
    } else if (数値 == 22) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #
            `)
    } else if (数値 == 23) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (数値 == 24) {
        basic.showLeds(`
            # # # . #
            . # # . #
            # # # # #
            # . . . #
            # # . . #
            `)
    } else if (数値 == 25) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (数値 == 26) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . # #
            # # . . .
            `)
    } else if (数値 == 27) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . . #
            # . . . #
            # # . . #
            `)
    } else if (数値 == 28) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    } else if (数値 == 29) {
        basic.showLeds(`
            # # . . .
            . # . # #
            # # . # #
            # . . . #
            # # . # #
            `)
    } else if (数値 == 30) {
        basic.showLeds(`
            # # . . .
            . # # # #
            # # # . #
            . # # # #
            # # . . .
            `)
    } else if (数値 == 31) {
        basic.showLeds(`
            # # # . #
            . . # . #
            # # # . #
            . . # . #
            # # # . #
            `)
    } else if (数値 == 32) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            . # . # .
            # # . # #
            `)
    } else if (数値 == 33) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            . # . . #
            # # . # #
            `)
    } else if (数値 == 34) {
        basic.showLeds(`
            # # . . .
            . # # . #
            # # # # #
            . # . . #
            # # . . #
            `)
    } else if (数値 == 35) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            . # . . #
            # # . # #
            `)
    } else if (数値 == 36) {
        basic.showLeds(`
            # # . . .
            . # . # #
            # # . # .
            . # . # #
            # # . # #
            `)
    } else if (数値 == 37) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . . #
            . # . . #
            # # . . #
            `)
    } else {
        basic.showNumber(数値)
    }
}
input.onButtonPressed(Button.A, function () {
    if (mode == "select") {
        now_select += -1
        if (now_select < 0) {
            now_select = 24
        }
        basic.clearScreen()
        show_point(now_select)
    }
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
    for (let カウンター = 0; カウンター <= Math.floor(input.lightLevel() / 4); カウンター++) {
        show_point(カウンター)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (mode == "select") {
        now_select += -5
        if (now_select < 0) {
            now_select = now_select + 25
        }
        basic.clearScreen()
        show_point(now_select)
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == "select") {
        now_select += 1
        if (now_select >= 25) {
            now_select = 0
        }
        basic.clearScreen()
        show_point(now_select)
    }
})
function get_y (数値2: number) {
    return Math.floor(数値2 / 5)
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
function get_x (数値3: number) {
    return 数値3 % 5
}
let mode = ""
let now_select = 0
music.playMelody("C D E F G A B C5 ", 120)
now_select = 0
mode = "select"
led.plot(0, 0)
basic.forever(function () {
    if (mode == "sinan") {
        show_sinan()
    } else if (mode == "temperature") {
        show_temperature(input.temperature())
    } else if (mode == "volume") {
        show_volume()
    } else {
    	
    }
})
