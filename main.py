def countdown():
    global count_down_number, mode
    count_down_number = input.running_time()
    for index in range(100):
        show_number(10 - Math.floor((input.running_time() - count_down_number) / 1000))
        basic.pause(200)
        if Math.floor((input.running_time() - count_down_number) / 1000) > 10:
            mode = "select"
            break

def on_button_pressed_a():
    global now_select
    if mode == "select":
        now_select += -1
        if now_select < 0:
            now_select = 24
input.on_button_pressed(Button.A, on_button_pressed_a)

def show_point(数値: number):
    led.plot(get_x(数値), get_y(数値))

def on_gesture_shake():
    global mode
    if now_select == 0:
        mode = "sinan"
    elif now_select == 1:
        mode = "temperature"
    elif now_select == 2:
        mode = "volume"
    elif now_select == 3:
        mode = "saikoro"
        basic.show_number(randint(1, 6))
    elif now_select == 4:
        mode = "countdown"
        countdown()
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # # # .
                        . . . . .
                        . . . . .
        """)
        basic.pause(2000)
        basic.clear_screen()
        show_point(now_select)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def show_volume():
    basic.pause(100)
    basic.clear_screen()
    カウンター = 0
    while カウンター <= Math.floor(input.light_level() / 4):
        show_point(カウンター)
        カウンター += 1

def on_button_pressed_ab():
    global now_select, mode
    if mode == "select":
        now_select += -5
        if now_select < 0:
            now_select = now_select + 25
    else:
        mode = "select"
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global now_select
    if mode == "select":
        now_select += 1
        if now_select >= 25:
            now_select = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def get_y(数値2: number):
    return Math.floor(数値2 / 5)
def show_number(数値3: number):
    if 数値3 < 10 and 数値3 >= 0:
        basic.show_number(input.temperature())
    elif 数値3 == 10:
            basic.show_leds("""
                . # . # .
                            . # . # .
                            . # . # .
                            . # . # .
                            . # . # .
            """)
    elif 数値3 == 11:
        basic.show_leds("""
            . # . # .
                        . # . # .
                        . # . # .
                        . # . # .
                        . # . # .
        """)
    elif 数値3 == 12:
        basic.show_leds("""
            # . # # #
                        # . . . #
                        # . # # #
                        # . # . .
                        # . # # #
        """)
    elif 数値3 == 13:
        basic.show_leds("""
            # . # # #
                        # . . . #
                        # . # # #
                        # . . . #
                        # . # # #
        """)
    elif 数値3 == 14:
        basic.show_leds("""
            # . # . #
                        # . # . #
                        # . # # #
                        # . . . #
                        # . . . #
        """)
    elif 数値3 == 15:
        basic.show_leds("""
            # . # # #
                        # . # . .
                        # . # # #
                        # . . . #
                        # . # # #
        """)
    elif 数値3 == 16:
        basic.show_leds("""
            # . # # #
                        # . # . .
                        # . # # #
                        # . # . #
                        # . # # #
        """)
    elif 数値3 == 17:
        basic.show_leds("""
            # . # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
        """)
    elif 数値3 == 18:
        basic.show_leds("""
            # . # # #
                        # . # . #
                        # . # # #
                        # . # . #
                        # . # # #
        """)
    elif 数値3 == 19:
        basic.show_leds("""
            # . # # #
                        # . # . #
                        # . # # #
                        # . . . #
                        # . # # #
        """)
    elif 数値3 == 20:
        basic.show_leds("""
            # # . . .
                        . # # # #
                        # # # . #
                        # . # # #
                        # # . . .
        """)
    elif 数値3 == 21:
        basic.show_leds("""
            # # # . #
                        . . # . #
                        # # # . #
                        # . . . #
                        # # # . #
        """)
    elif 数値3 == 22:
        basic.show_leds("""
            # # . # #
                        . # . . #
                        # # . # #
                        # . . # .
                        # # . # #
        """)
    elif 数値3 == 23:
        basic.show_leds("""
            # # . # #
                        . # . . #
                        # # . # #
                        # . . . #
                        # # . # #
        """)
    elif 数値3 == 24:
        basic.show_leds("""
            # # # . #
                        . # # . #
                        # # # # #
                        # . . . #
                        # # . . #
        """)
    elif 数値3 == 25:
        basic.show_leds("""
            # # . # #
                        . # . # .
                        # # . # #
                        # . . . #
                        # # . # #
        """)
    elif 数値3 == 26:
        basic.show_leds("""
            # # . # #
                        . # . # .
                        # # . # #
                        # . . # #
                        # # . . .
        """)
    elif 数値3 == 27:
        basic.show_leds("""
            # # . # #
                        . # . . #
                        # # . . #
                        # . . . #
                        # # . . #
        """)
    elif 数値3 == 28:
        basic.show_leds("""
            # # # # #
                        . # # . #
                        # # # # #
                        # . # . #
                        # # # # #
        """)
    elif 数値3 == 29:
        basic.show_leds("""
            # # . . .
                        . # . # #
                        # # . # #
                        # . . . #
                        # # . # #
        """)
    elif 数値3 == 30:
        basic.show_leds("""
            # # . . .
                        . # # # #
                        # # # . #
                        . # # # #
                        # # . . .
        """)
    elif 数値3 == 31:
        basic.show_leds("""
            # # # . #
                        . . # . #
                        # # # . #
                        . . # . #
                        # # # . #
        """)
    elif 数値3 == 32:
        basic.show_leds("""
            # # . # #
                        . # . . #
                        # # . # #
                        . # . # .
                        # # . # #
        """)
    elif 数値3 == 33:
        basic.show_leds("""
            # # . # #
                        . # . . #
                        # # . # #
                        . # . . #
                        # # . # #
        """)
    elif 数値3 == 34:
        basic.show_leds("""
            # # . . .
                        . # # . #
                        # # # # #
                        . # . . #
                        # # . . #
        """)
    elif 数値3 == 35:
        basic.show_leds("""
            # # . # #
                        . # . # .
                        # # . # #
                        . # . . #
                        # # . # #
        """)
    elif 数値3 == 36:
        basic.show_leds("""
            # # . . .
                        . # . # #
                        # # . # .
                        . # . # #
                        # # . # #
        """)
    elif 数値3 == 37:
        basic.show_leds("""
            # # . # #
                        . # . . #
                        # # . . #
                        . # . . #
                        # # . . #
        """)
    else:
        basic.show_number(数値3)
def show_sinan():
    if input.compass_heading() <= 22.5 or input.compass_heading() > 337.5:
        basic.show_arrow(ArrowNames.SOUTH)
    elif input.compass_heading() <= 112.5 and input.compass_heading() > 67.5:
        basic.show_arrow(ArrowNames.EAST)
    elif input.compass_heading() <= 202.5 and input.compass_heading() > 157.5:
        basic.show_arrow(ArrowNames.NORTH)
    elif input.compass_heading() <= 292.5 and input.compass_heading() > 247.5:
        basic.show_arrow(ArrowNames.WEST)
    elif input.compass_heading() <= 67.5 and input.compass_heading() > 22.5:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif input.compass_heading() <= 157.5 and input.compass_heading() > 112.5:
        basic.show_arrow(ArrowNames.NORTH_EAST)
    elif input.compass_heading() <= 247.5 and input.compass_heading() > 202.5:
        basic.show_arrow(ArrowNames.NORTH_WEST)
    elif input.compass_heading() <= 337.5 and input.compass_heading() > 292.5:
        basic.show_arrow(ArrowNames.SOUTH_WEST)
def get_x(数値32: number):
    return 数値32 % 5
count_down_number = 0
mode = ""
now_select = 0
now_select = randint(0, 24)
mode = "select"
show_point(now_select)

def on_forever():
    if mode == "sinan":
        show_sinan()
    elif mode == "temperature":
        show_number(input.temperature())
    elif mode == "volume":
        show_volume()
    elif mode == "select":
        basic.clear_screen()
        show_point(now_select)
    else:
        pass
basic.forever(on_forever)
