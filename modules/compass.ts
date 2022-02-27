class Compass extends Module{
    onLoop(){
        let compassHeading = input.compassHeading()
        if (compassHeading <= 22.5 || compassHeading > 337.5) {
            basic.showArrow(ArrowNames.South)
        } else if (compassHeading <= 112.5 && compassHeading > 67.5) {
            basic.showArrow(ArrowNames.East)
        } else if (compassHeading <= 202.5 && compassHeading > 157.5) {
            basic.showArrow(ArrowNames.North)
        } else if (compassHeading <= 292.5 && compassHeading > 247.5) {
            basic.showArrow(ArrowNames.West)
        } else if (compassHeading <= 67.5 && compassHeading > 22.5) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (compassHeading <= 157.5 && compassHeading > 112.5) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (compassHeading <= 247.5 && compassHeading > 202.5) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (compassHeading <= 337.5 && compassHeading > 292.5) {
            basic.showArrow(ArrowNames.SouthWest)
        }
    }
}