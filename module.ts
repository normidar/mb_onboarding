
class Module{
    onStart(): void{}
    onEnd(): void {
        this.endListener()
    }
    onAClicked(): void{}
    onBClicked(): void{}
    onABClicked(): void{
        this.onEnd()
    }
    onLoop(): void {}
    onShake(): void {}

    endListener: () => void
    addEndListener(body: () => void): void{
        this.endListener = body
    }
}

