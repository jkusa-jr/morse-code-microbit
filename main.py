def on_pin_pressed_p0():
    basic.show_string("Hello!")
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    radio.send_string("-")
input.on_button_pressed(Button.A, on_button_pressed_a)

def Morse_Code_decoder(Morse_Code: str):
    for index in range(len(Morse_Code)):
        if True:
            basic.show_leds("""
                . . # . .
                . # . # .
                . # # # .
                # . . . #
                # . . . #
                """)
            basic.clear_screen()
        elif False:
            pass
        elif False:
            pass
        elif False:
            pass
        else:
            pass

def on_button_pressed_ab():
    radio.send_string(" OVER")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    while not (receivedString.includes("OVER")):
        Morse_Code_decoder(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string(".")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    radio.set_group(255)
    radio.set_transmit_power(7)
basic.forever(on_forever2)
