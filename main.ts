
// onStart
let mode = "select"
let now_select = randint(0, 24)
let modules: Module[] = [
    new Dice(),
    new Compass(),
]
show_point(now_select)
modules.forEach(function (v,i){
    v.addEndListener(function (){
        mode = "select"
        basic.clearScreen()
        show_point(now_select)
    })
})


input.onButtonPressed(Button.A, function () {
    if (mode == "select") {
        now_select += 0 - 1
        if (now_select < 0) {
            now_select = 24
        }
        basic.clearScreen()
        show_point(now_select)
    } else if (mode == "module") {
        modules[now_select].onAClicked()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (mode == "select") {
        
        if (now_select < modules.length) {
            basic.clearScreen()
            modules[now_select].onStart()
            mode = "module"
        }
    } else if (mode == "module") {
        modules[now_select].onShake()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == "select") {
        now_select += 0 - 5
        if (now_select < 0) {
            now_select += 25
        }
        basic.clearScreen()
        show_point(now_select)
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
        basic.clearScreen()
        show_point(now_select)
    } else if (mode == "module") {
        modules[now_select].onBClicked()
    }
})
basic.forever(function () {
    if (mode == "module") {
        modules[now_select].onLoop()
    }
})
