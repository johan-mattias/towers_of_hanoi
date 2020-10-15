function display () {
    basic.clearScreen()
    for (let index = 0; index <= first_stick.length - 1; index++) {
        led.plotBrightness(0, map_back(index), map_back(index) * 50 + 50)
    }
    for (let index = 0; index <= second_stick.length - 1; index++) {
        led.plotBrightness(2, map_back(index), (map_back(index) + 50) * 5)
    }
    for (let index = 0; index <= third_stick.length - 1; index++) {
        led.plotBrightness(4, map_back(index), (map_back(index) + 50) * 5)
    }
}
function map_back (num: number) {
    if (num == 0) {
        return 4
    } else if (num == 1) {
        return 3
    } else if (num == 2) {
        return 2
    } else if (num == 3) {
        return 1
    } else if (num == 4) {
        return 0
    }
    return 0
}
let third_stick: number[] = []
let second_stick: number[] = []
let first_stick: number[] = []
let plate_0 = 0
let plate_1 = 1
let plate_2 = 2
let plate_3 = 3
let plate_4 = 4
first_stick = [plate_0, plate_4, plate_3]
second_stick = [plate_1]
third_stick = [plate_2]
display()
basic.forever(function () {
	
})
