
input.onButtonPressed(Button.A, function () {
    if (mode == "select") {
        now_select -= 1
        if (now_select < 0) {
            now_select = 24
        }
    } else if (mode == "module") {
        modules[now_select].onAClicked()
    }
})

input.onGesture(Gesture.Shake, function () {
    if(mode == "select") {
        if (now_select < modules.length){
            modules[now_select].onStart()
            mode = "module"
        }
    } else if(mode == "module"){
        modules[now_select].onShake()
    }
})

input.onButtonPressed(Button.AB, function () {
    if (mode == "select") {
        now_select -= 5
        if (now_select < 0) {
            now_select += 25
        }
    } else if (mode == "module") {
        modules[now_select].onABClicked()
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == "select") {
        now_select += 1
        if (now_select >= 25) {
            now_select = 0
        }
    } else if (mode == "module") {
        modules[now_select].onBClicked()
    }
})

let カウンター = 0
let now_count_down = 0
let count_down_number = 0
let mode = "select"
let now_select = 0
let modules = [new Dice()]
now_select = randint(0, 24)
show_point(now_select)
basic.forever(function () {
    if(mode == "module"){
        modules[now_select].onLoop()
    }
})
