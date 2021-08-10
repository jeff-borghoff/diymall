radio.onReceivedValue(function (name, value) {
    if (name == "level") {
        OLED12864_I2C.clear()
        level = value
    }
})
let level = 0
radio.setGroup(1)
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
OLED12864_I2C.on()
basic.forever(function () {
    OLED12864_I2C.showNumber(
    5,
    2,
    level,
    1
    )
})
