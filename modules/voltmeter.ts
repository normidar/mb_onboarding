class Voltmeter extends Module{
    isUseBarGraph: boolean = true
    constructor(){super()}
    onLoop(){
        let analog = pins.analogReadPin(AnalogPin.P0) 
        if(this.isUseBarGraph){
            led.plotBarGraph(analog, 1025)
        } else {
            basic.showNumber(analog)
        }
    }
    onAOrBClicked(){
        this.isUseBarGraph = !this.isUseBarGraph
    }
}