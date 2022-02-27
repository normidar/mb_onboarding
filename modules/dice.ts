class Dice extends Module {
    onAClicked() {
        this.showRandom()
    }
    onBClicked() {
        this.showRandom()
    }
    onShake() {
        this.showRandom()
    }
    onStart(){
        this.showRandom()
    }
    showRandom(){
        basic.showNumber(randint(1,6))
    }
}