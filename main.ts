input.onButtonPressed(Button.A, function () {
    PinToRead += 1
    if (PinToRead > 2) {
        PinToRead = 0
    }
    basic.showString("P")
    basic.showNumber(PinToRead)
    soundExpression.happy.playUntilDone()
})
let PinToRead = 0
basic.clearScreen()
// music.play_melody("C5 - A - B F - B ", 120)
// basic.show_string("Hi Amelia")
soundExpression.giggle.playUntilDone()
basic.forever(function () {
    if (PinToRead == 0) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    }
    if (PinToRead == 1) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    }
    if (PinToRead == 2) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    }
})
