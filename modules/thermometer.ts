
class Thermometer extends Module{
    isStateMode: boolean = true
    constructor(){
        super()
        // this.isStateMode = true
    }
    onLoop(){
        if(this.isStateMode) {
            show_number(input.temperature())
        } else {
            basic.showNumber(input.temperature())
        }
    }
    onAOrBClicked(){
        this.isStateMode = !this.isStateMode
    }
}