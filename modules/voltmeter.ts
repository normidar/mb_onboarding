class Voltmeter extends Module{
    isUseBarGraph: boolean = true
    lastAnalog = 0
    constructor(){super()}
    onLoop(){
        let analog = pins.analogReadPin(AnalogPin.P0) 
        if(this.isUseBarGraph){
            this.lastAnalog = this.lastAnalog + ((analog - this.lastAnalog)/5)
            led.plotBarGraph(this.lastAnalog, 1025)
        } else {
            basic.showNumber(analog)
        }
    }
    onBClicked(){
        this.isUseBarGraph = !this.isUseBarGraph
    }
    onAClicked(){
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P2, 1023)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P2, 0)
    }

}