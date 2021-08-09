OLED12864_I2C.init(60)
OLED12864_I2C.on()
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Hello!",
    1
    )
})
