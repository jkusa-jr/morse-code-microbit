enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    Moris_code = ""
    Text = ""
})
function Traslate (text: string) {
    Moris_code = ""
    if (text == ".-") {
        Text = "" + Text + "A"
    } else if (text == "-...") {
        Text = "" + Text + "B"
    } else if (text == "-.-.") {
        Text = "" + Text + "C"
    } else if (text == "-..") {
        Text = "" + Text + "D"
    } else if (text == ".") {
        Text = "" + Text + "E"
    } else if (text == "..-.") {
        Text = "" + Text + "F"
    } else if (text == "--.") {
        Text = "" + Text + "G"
    } else if (text == "....") {
        Text = "" + Text + "H"
    } else if (text == "..") {
        Text = "" + Text + "I"
    } else if (text == ".---") {
        Text = "" + Text + "J"
    } else if (text == "-.-") {
        Text = "" + Text + "K"
    } else if (text == ".-..") {
        Text = "" + Text + "L"
    } else if (text == "--") {
        Text = "" + Text + "M"
    } else if (text == "-.") {
        Text = "" + Text + "N"
    } else if (text == "---") {
        Text = "" + Text + "O"
    } else if (text == ".--.") {
        Text = "" + Text + "P"
    } else if (text == "--.-") {
        Text = "" + Text + "Q"
    } else if (text == ".-.") {
        Text = "" + Text + "R"
    } else if (text == "...") {
        Text = "" + Text + "S"
    } else if (text == "-") {
        Text = "" + Text + "T"
    } else if (text == "..-") {
        Text = "" + Text + "U"
    } else if (text == "...-") {
        Text = "" + Text + "V"
    } else if (text == ".--") {
        Text = "" + Text + "W"
    } else if (text == "-..-") {
        Text = "" + Text + "X"
    } else if (text == "-.--") {
        Text = "" + Text + "Y"
    } else if (text == "--..") {
        Text = "" + Text + "Z"
    } else if (text == "-----") {
        Text = "" + Text + "0"
    } else if (text == ".----") {
        Text = "" + Text + "1"
    } else if (text == "..---") {
        Text = "" + Text + "2"
    } else if (text == "...--") {
        Text = "" + Text + "3"
    } else if (text == "....-") {
        Text = "" + Text + "4"
    } else if (text == ".....") {
        Text = "" + Text + "5"
    } else if (text == "-....") {
        Text = "" + Text + "6"
    } else if (text == "--...") {
        Text = "" + Text + "7"
    } else if (text == "---..") {
        Text = "" + Text + "8"
    } else if (text == "----.") {
        Text = "" + Text + "9"
    } else if (text == ".-.-.-") {
        Text = "" + Text + "."
    } else if (text == "--..--") {
        Text = "" + Text + ","
    } else if (text == ".----.") {
        Text = "" + Text + "'"
    } else if (text == "..--..") {
        Text = "" + Text + "?"
    } else if (text == "---...") {
        Text = "" + Text + ":"
    } else if (text == "-....-") {
        Text = "" + Text + "-"
    } else if (text == "-..-.") {
        Text = "" + Text + "/"
    } else if (text == "-.--.") {
        Text = "" + Text + "["
    } else if (text == "-.--.-") {
        Text = "" + Text + "]"
    } else if (text == ".-..-.") {
        Text = "" + Text + "\""
    } else if (text == "..--.-") {
        Text = "" + Text + "_"
    } else if (text == "-...-") {
        Text = "" + Text + "="
    } else if (text == ".-.-.") {
        Text = "" + Text + "+"
    } else if (text == ".--.-.") {
        Text = "" + Text + "@"
    } else if (text == " ") {
        Text = "" + Text + " "
    } else if (text == "-.-.--") {
        Text = "" + Text + "!"
    } else if (text == "") {
        Text = "" + Text + ""
    } else {
        basic.showString("INVALID CHARACTER")
        Moris_code = ""
    }
}
input.onButtonPressed(Button.A, function () {
    Moris_code = "" + Moris_code + "."
})
input.onPinPressed(TouchPin.P2, function () {
    Traslate(Moris_code)
    Moris_code = ""
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(Text)
    Text = ""
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Moris_code = "" + Moris_code + "-"
})
input.onPinPressed(TouchPin.P1, function () {
    Traslate(" ")
})
let Text = ""
let Moris_code = ""
basic.clearScreen()
Moris_code = ""
Text = ""
basic.forever(function () {
    radio.setGroup(255)
    radio.setTransmitPower(7)
})
