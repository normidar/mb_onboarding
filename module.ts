
class Module{
    onStart(): void{}
    onEnd(): void {
        this.endListener()
    }
    onAClicked(): void{
        this.onAOrBClicked()
    }
    onBClicked(): void{
        this.onAOrBClicked()
    }
    onABClicked(): void{
        this.onEnd()
    }
    onAOrBClicked(): void{}
    onLoop(): void {}
    onShake(): void {}

    endListener: () => void
    addEndListener(body: () => void): void{
        this.endListener = body
    }
}

