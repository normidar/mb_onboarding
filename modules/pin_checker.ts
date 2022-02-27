
class PinChecker extends Module{
    
    onLoop(){
        if (input.pinIsPressed(TouchPin.P0)){
            basic.showNumber(0)
        } else if (input.pinIsPressed(TouchPin.P1)){
            basic.showNumber(1)
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showNumber(2)
        } else {
            basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        }
    }
}