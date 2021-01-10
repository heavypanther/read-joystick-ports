def on_button_pressed_a():
    PinToRead += 1
    if PinToRead > 2:
        PinToRead = 0
    basic.show_string("P")
    basic.show_number(PinToRead)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.clear_screen()
# music.play_melody("C5 - A - B F - B ", 120)
# basic.show_string("Hi Amelia")
soundExpression.giggle.play_until_done()

def on_forever():
    PinToRead2 = 0
    if PinToRead2 == 0:
        basic.show_number(pins.analog_read_pin(AnalogPin.P0))
    if PinToRead2 == 1:
        basic.show_number(pins.analog_read_pin(AnalogPin.P1))
    if PinToRead2 == 2:
        basic.show_number(pins.analog_read_pin(AnalogPin.P2))
basic.forever(on_forever)
