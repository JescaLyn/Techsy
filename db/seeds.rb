# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
  {
    username: "JescaLyn",
    password: "password",
    email: "jessica_terry@alumni.brown.edu",
    fname: "Jessica",
    lname: "Terry"
  },
  {
    username: "Guest",
    password: "password",
    email: "lukavi_darkion@yahoo.com",
    fname: "Guest",
    lname: "Account"
  },
  {
    username: "WALL-E",
    password: "iluvEVE",
    email: "wall.e@gmail.com",
    fname: "WALL",
    lname: "E"
  },
  {
    username: "robotwrangler",
    password: "popcorn",
    email: "mcolebishop@gmail.com",
    fname: "Cole",
    lname: "Bishop"
  }
])

Shop.create ([
  {
    name: "Lilac Sky",
    user_id: 1,
    description: "Elegant and simple products",
    country: "United States",
    currency: "USD",
    kind: "part time",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/c_scale,w_300/v1472754771/hi-tech-planet_urceeb.jpg"
  },
  {
    name: "Tech Revolution",
    user_id: 2,
    description: "Cutting edge products",
    country: "United States",
    currency: "USD",
    kind: "full time",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/c_scale,w_300/v1472754768/infinity_hqiufg.jpg"
  },
  {
    name: "Axiom",
    user_id: 3,
    description: "We're living in the future!",
    country: "United States",
    currency: "USD",
    kind: "part time",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/c_scale,w_300/v1472754768/axiom4_hok57q.jpg"
  }
])

Listing.create([
  {
    title: "OSHChip V1.0",
    subtitle: "A tiny processor board the size of a 16 pin DIP with Bluetooth Low Energy",
    shop_id: 2,
    price: 25.00,
    quantity: 10,
    description: "The most striking thing you see is that it is the size of a 16 pin DIP, and unlike other processor boards, it is designed from the start to be compatible with the breadboards that are commonly used by electronic hobbyists, robotics projects, and oh so many hackaday projects. The pins are directly designed to work with these breadboards, and unlike the usual pin strips found on other processor boards, they plug in easily to the breadboard, and don’t damage it. Unlike other processor boards that are far larger, OSHChip can be plugged into the middle two rows of a breadboard, and it doesn’t cover the remaining holes for your interconnecting wires. The Processor/Radio SOC (System On Chip) is made by Nordic Semiconductor: nRF51822-CFAC-A0 (which is the most advanced member of the nRF51 family of products).",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/c_scale,w_1000/v1472765631/osh_chip_xme1qg.jpg"
  },
  {
    title: "3D Printable Robot Arm Design",
    subtitle: "A printable robot arm, a little bigger than the usual hobby servo one.",
    shop_id: 2,
    price: 30.00,
    quantity: 100,
    description: "My printable robot arm is inspired by well known industry robots, but printable.
This design will produce a robot arm that can be used in private or small businesses, making robot development available for everyone.
The arm lifts about 2 kg, enough to perform everyday tasks. Currently most robot arms are expensive, small, weak, or clumsy.
Industrial robots are expensive and dangerous, thus not suitable for use at home or in schools.
This printable robot can be built and used by everyone.
This is a great design to build robot arms for disabled persons, to manage their daily needs and increase independence.
The arm is remote controlled; you could even use the robot to open your door if you forgot your keys!",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/c_scale,w_1000/v1472765602/robot_arm_x9dr4q.jpg"
  },
  {
    title: "Sugarcube - a tactile music controller",
    subtitle: "The Sugarcube is a portable controller powered by Arduino that allows you to interact with MIDI and audio in playful and intuitive ways.",
    shop_id: 1,
    price: 79.00,
    quantity: 3,
    description: "This project is a portable, Arduino-powered, grid-based MIDI controller that boots up into a variety of apps to do lots of things with sound. It has 16 backlit buttons, used as both inputs and outputs to give the controller some visual feedback. 2 potentiometers give analog control, depending on the app the pots are assigned to tempo, MIDI velocity, pitch, and scrolling (making the available grid space larger than 4x4). An x/y accelerometer and an x/y gyroscope add some playful, gestural control to the device; most of the apps implement a 'shake to erase' control and several respond to tilt in various ways. It boots up into 7 different apps (described below), though it has the potential to boot up into 16 total. This device is primarily a MIDI controller, but I've also written an app that allows you to pull the button and analog data into MaxMSP and to control audio.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1472765592/sugar_cube_nwivst.jpg"
  },
  {
    title: "Medicycle - Urban Responder",
    subtitle: "We are living in the future, Medics now need motorbikes to navigate our congested cities but they no longer need two wheels",
    shop_id: 3,
    price: 1999.00,
    quantity: 3,
    description: "'Its the year 2350, flying cars never really took off and so the world is gridlocked.
The Medicycle's use of revolutionary technology allows our emergency response teams to navigate traffic with ease whilst the latest up to date information is beamed directly to the riders heads up display from the central control centre.'
The Medicycle is a self balancing twin tire unicycle that has been congfigured as a high tech first response vehicle, it uses an Arduino Mega in conjunction with an inertial measurement unit to keep itself balanced.
Useful information such as battery condition or even somebody's pulse can monitored with the heads up display which is wirelessly linked to the unicycle.
Panniers can be fitted to the Medicycle giving it the ability to carry additional medical supplies and equipment.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1472765586/medi_cycle_mwaxlo.jpg"
  },
  {
    title: "8x8x8 Blue LED Cube",
    subtitle: "512 LEDs driven by an Arduino via eight shift-registers and eight MOSFETs",
    shop_id: 3,
    price: 135.00,
    quantity: 2,
    description: "512 LEDs driven by an Arduino via eight 8-bit shift registers and eight MOSFETs.
Most LED cubes I've seen are limited by the LED lead length. I wanted my cube to be as large as possible while still producing smooth animations. I settled on 4cm between leds, resulting in a 28 cm (11 inch) cube.

I also wanted the cube to be more interactive, so I used the remaining six ports on the Arduino to handle three touch sensors (thanks to Paul Badger for his awesome CapSense library) and two potentiometers. ",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1472765588/led_cube_wrtgly.jpg"
  },
  {
    title: "Animatronic 3D printed Bird",
    subtitle: "Bird robots!",
    shop_id: 1,
    price: 40.00,
    quantity: 19,
    description: "The Mechanical Bird Armature is designed to have the ability to fit the profile of many small birds, ranging from Parrots, Cockatoos, Owls, Peregrine Falcons, Hawks, and any other bird of the same profile.
This kind of device can then be used as a Bird Lure to help aid in the research into raptors, or as a Bird Decoy to help solve pest problems in and around city's.
Im also making these as animatronic film props as well as for use in TV commercials and programs, and theatre props, along with Attractions, exhibitions and maybe even just a party piece to intrigue your guests.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1472765582/animatronic_owl_qzguwo.jpg"
  },
  {
    title: "Brainwave Wings",
    subtitle: "EEG-controlled, animatronic wings",
    shop_id: 1,
    price: 89.00,
    quantity: 4,
    description: "Concept: Brainwave-reactive, animatronic wings based on fantastical beings. Beautiful and animalistic.
Materials: Necomimi, leather, ribbon, metal, feathers, LEDs, wire, yarn.

This piece is based on Necomimi.  Animatronic wings that respond to brainwaves. I was extra-scrupulous about aligning them correctly, such that they flap alluringly and will not get tangled.",
     image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354358/brainwave-wings_vqtecw.jpg"
  },
  {
    title: "Global radiation monitoring network",
    subtitle: "The uRADMonitor is a plug-and-play, low power, self contained radiation monitoring device, connected to a centralised server component.",
    shop_id: 2,
    price: 129.00,
    quantity: 2,
    description: "The uRADMonitor is a completely assembled and functional radiation dosimeter unit. In the current models, the radiation detector is a Geiger Muller tube. The electronics provided are self sufficient: there is a fast microcontroller, a precision regulated high voltage supply, a digital counter and a network interface (Ethernet). The detector works by itself, while consuming very little power, measurements show only 0.8Watts of power! It could almost run on a single AA cell for hours, or it could easily be powered by a solar power source.

While the hardware is globally distributed , the second component of the project - the server is a centralised NODE, receiving the data reports. The uRADMonitor sends small packets of data every minute, so we have an excellent resolution to the measurements.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354366/radiation_erue72.jpg"
  },
  {
    title: "DiXi - Arduino Sam D11 USB Stick",
    subtitle: "ATSAMD11C14 Arduino zero compatible ARM M0 compact usb stick.",
    shop_id: 2,
    price: 12.00,
    quantity: 14,
    description: "DiXi is an ATSAMD11C14 based development board. Onboard button and 7 segment display with RGB LEDs.
edge connector
nice compact shape like my Picoduino
Why sam D11??
SOIC14 is really easy for solder small package. Powerful arm M0 core. Arduino IDE supported Native USB.
Dixi is the little brother of WINXI.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354350/aruduino_usb_stick_lhdtbd.jpg"
  },
  {
    title: "nRFIoT - Easy IoT Sensors",
    subtitle: "Really easy IoT hardware. And cheap too.",
    shop_id: 2,
    price: 8.99,
    quantity: 22,
    description: "Take an Arduino Pro Mini 3.3v, one of those really cheap nrf24l01 transceiver boards, and a simple PCB that connects them together. And also powers the thing through a micro-USB plug.

I made a very simple board that takes a 5v USB power supply, converts it to a clean 3.3v, connects the (very annoying to use) nrf24l01 module and the pro mini, all in a small and easy to use little package.

If you solder it together with headers (like my picture shows), you can very easily connect whatever sensors you want. It is programmed easily through an FTDI programmer and you can still use the Arduino IDE (if you want).

I've written a simple protocol that has proven to be quite reliable. It is still a work in progress, as is how the data is presented, but the hardware is what this project is about. The finished product measures in at the size of the pro mini, and about 3 times thicker.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354317/easy_iot_n9ep0i.jpg"
  },
  {
    title: "NeoLED : NeoPixels on Edison",
    subtitle: "Controlling large amounts of WS2812 LEDs with the Edison is as easy as writing to an I2C Memory Array!",
    shop_id: 2,
    price: 15.00,
    quantity: 3,
    description: "Driving an array of WS2812 LEDs is not all that difficult, however, it can present problems for some Linux platforms, like the Raspberry PI, Beaglebone, or the Edison; and it can also create timing problems in your projects, if for example, you are doing several real-time tasks like audio or motion control in addition to controlling the LEDs.

We decided to make it very simple (and inexpensive) for people to drive arrays of WS2812 LEDs using the Cypress PSoC4, configured as an I2C (or SPI) memory device. That way, all the specific real-time timing problems of driving WS2812 LEDs are eliminated, and you simply access the LEDs as you would a standard memory device.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354421/neoLED_copy_i5tpad.png"
  },
  {
    title: "Simple LED Strip Bicycle Tail Light",
    subtitle: "An easy to build, fun bike tail light using a LED strip. Designed to be visible in the dead of night. Hackable to also act as a turn signal.",
    shop_id: 3,
    price: 15.00,
    quantity: 5,
    description: "Simple, fun, colorful and durable! Programmable for different effects.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473356070/simple_led_taillight_gykvu8.jpg"
  },
  {
    title: "Arduino Pokéball",
    subtitle: "Throw a real-life ball to catch Pokémon in Pokémon Go.",
    shop_id: 3,
    price: 25.00,
    quantity: 99,
    description: "In order to start catching in a more exciting way, get this Arduino Pokéball! The Arduino Pokéball works by using the accelerometer in the 101 board to sense that it's been thrown, and then using the bluetooth on the board, the 101 sends the info to the Arduino Pokéball app on the phone.
Now in the app, when the “Toss mode” is on the app looks for any changes in the values that are being sent to it over the bluetooth. If the value is changed it means the Arduino been thrown. When the value is changed, the app creates a text file and write the value into it, modifying the text file. That's all the Arduino PokeBall app does. Running in the background of all of this, there is another appTasker. Tasker is monitoring the same text file the app writes to, and when the file is modified Tasker sets up  a “Task”, an action, that runs a small line of code. The code line is a “Shell command” containing the following code: input swipe 550 1650 550 900 200. That will throw your  Pokéball in Pokémon Go!",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354397/arduino_pokeball_npolzp.jpg"
  },
  {
    title: "Tap Tracker Smart Tap Handle",
    subtitle: "Measure pours from specific taps, track the most popular taps and identify when taps are most active.",
    shop_id: 1,
    price: 35.00,
    quantity: 12,
    description: "I had this idea while out drinking. After observing a few rounds of drinks being poured and conversing with the bartender, it struck me. There’s no easy way for bars to measure pours from specific taps, what types of pours are most popular and when those taps are most active. So much of the traditional watering hole is incredibly old-fashioned (and in some cases, that's the way we like it). But having an interest in opening a bar myself in the near future, it occurred to me that finding a way to track tap pours could come in handy down the line. This tap tracker just does that!",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354341/tap_tracker_o6iq06.jpg"
  },
  {
    title: "Arduino Lie Detector",
    subtitle: "Someone has been eating my cookies! Thankfully Arduino is here to help find out who it is.",
    shop_id: 2,
    price: 12.00,
    quantity: 7,
    description: "A lie detector to finally know if your friends are lying!",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354341/lie_detector_nvaigx.jpg"
  },
  {
    title: "Chirp! - plant watering alarm",
    subtitle: "Plant watering alarm - chirps when the soil dries out. Based on capacitive moisture sensing.",
    shop_id: 1,
    price: 15.00,
    quantity: 9,
    description: "Chirp is a plant watering alarm - as simple as that. You put it into the soil near a plant and it emits a tiny chirp when the soil is dry, reminding you to water the plant. Alternatively, Chirp can work as an I2C soil moisture sensor. If all you need is moisture sensing, consider buying a standalone sensor version.

Chirp uses capacitive humidity sensing technique that does not interfere with the soil and does not cause corrosion of electrodes unlike resistive sensing.

Chirp is Open Source and totally hackable - you can download and fiddle with the firmware or use it as a standalone moisture sensor.

Special care has been taken not to make it yet another source of annoyance - Chirp can detect if it’s day or night by measuring the amount of ambient light and will not make noise at night.

The alarm level can be set for each plant individually. As water is consumed by the plant, Chirp will detect the low moisture level and will start to emit rare short chirps. As more water evaporates, Chirp will increase the alarm rate.

Chirp is Open Source Hardware available under CERN Hardware Licence v.1.1. Boards are produced by seeedstudio in China, soldering and testing is done by the author.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354325/chirp_fvwiad.jpg"
  },
  {
    title: "ZEUS 3D Printer/Editor/Scanner",
    subtitle: "ZEUS is the world's first true stand-alone 3D All-in-One device for scanning, editing, slicing and printing of 3D objects!",
    shop_id: 2,
    price: 2499.00,
    quantity: 3,
    description: "The AIO Robotics Zeus All-in-One 3D fused-filament-fabrication printer has a closed platform for printing parts up to 14.5 x 20.4 x 15.3 cm (H x W x D) using 1.75-mm PLA filament (sold separately) as well as scanning, copying, and editing 3D parts up to 22.9 x 12.7 cm (Dia. x H). The machine is designed with its own operating system to perform all functions without the use of an external computer, and it is controlled using the 7\" color touchscreen. The installed software fully automates all functions, including slicing a 3D design for print, calibrating, and leveling the print bed. The machine prints 3D parts with a print resolution up to 80 microns. The scanning function uses a laser and turntable to create a 3D computer model of an object with up to 125-micron detail accuracy. Choosing the copy function automates the scan and print function to create replicas of an object.

Why did you make it?

Simplifying 3D Printing/Scanning for users - both beginners and prosumers.

What makes it special?

World's first All-In-One 3D Printer with integrated high-speed computer and touchscreen for on-board slicing, editing, and processing.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354353/zeus_3d_printer_copy_gakpxo.png"
  },
  {
    title: "Rotating 3D Printed Heart Gear",
    subtitle: "This is a 3D printed heart made of gears that distorts in shape as you rotate the pieces.",
    shop_id: 1,
    price: 20.00,
    quantity: 87,
    description: "This 3D printed heart made of 8 individual, interlocking gears will distort in shape as you rotate the parts. Keep rotating until it turns back into a heart!

This will be great for Anniversaries, Birthdays, or Mother's Day!

Dimensions: 4 inches tall and wide, 2 inches thick

*'Stand' not included.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354327/3d_heart_gear_snlmvq.jpg"
  },
  {
    title: "Color Changing Luminary Fractal Design",
    subtitle: "Multi-colored luminary fractal decorations!",
    shop_id: 1,
    price: 19.00,
    quantity: 62,
    description: "Beautiful curves and colors combine to create this exquisite artwork you will enjoy in your home or office. The luminary smoothly transitions to a new color every few seconds. It makes a great addition to indoor or outdoor night gatherings.

This Color Changing Luminary measures 4 inches wide and 4 inches tall and is made of a PLA, a durable and renewable plant based plastic. It was designed in-house and created slowly and carefully using our precision calibrated 3D printer and quality PLA.

The luminary is powered by one easily replaceable battery which will provide 50 hours of illumination.

Order risk free with a money back guarantee. I ship orders within 24 hours by first class mail with tracking.

Thanks for looking and have a great day!",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473357160/luminescent_yjijcs.png"
  },
  {
    title: "Deathstar Yo-yo",
    subtitle: "The Death Star is awesome. Yo-yos are awesome. Awesome squared.",
    shop_id: 3,
    price: 12.00,
    quantity: 15,
    description: "Just imagine the chaos in the control room when this thing starts spinning!!!

My son wanted a yo-yo. I made him a yo-yo. I modified some existing 3D models to suit my purpose and printed them out in silver PLA. Now this much fun can belong to you too.

Cut a section of chopstick and insert in both halves of the yo-yo shells.

Wax string with birthday candle and attach to yo-yo.

Spin it up and let it rip!

This is 3D printed in organically sourced PLA plastic. When you are done with it, throw it in your compost.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354363/deathstar_yoyo_pajakm.jpg"
  },
  {
    title: "Flone 3.0 Drone Starting Kit",
    subtitle: "Drone Starting Kit is a full open source drone kit designed for fly by smartphone.",
    shop_id: 3,
    price: 330.00,
    quantity: 7,
    description: "This is a full kit of a Drone Starting Kit with everything necessary to build a flone 3.0 quadcopter.

Flone is a powerful, compact, and smart design of a low-cost quadcopter that can carry easily an smartphone, or a camera in a gimbal, and much more.

Our kits are designed for improve the knowledge in science and technology.

Cool & Smart

Small, Smart, Compact & Powerful.

Control by Android App.

Configuration in your browser with Cleanflight.

(Eco) wooden frame.

Elements of the Kit

Each Drone Starting Kit contains:

Construction manual.
Flone plywood 5mm frame.
Naze32 rev6 10DOF flight controller.
4x EMAX Motor Brushless 1534kv.
4x Simonk ESC 10 Amp.
8x Propeller 6 x 4,5 (4 refill props).
4x Aluminium propeller mount.
4x Landing Gear
Bluetooth Module.
XT60 Connector.
Phone mount with anti-vibration latex.
Velcro battery holder
Optional parts

Battery 1800 mAh (Only ships by land)
220V 5A battery charger.(Optional)
Technical Specifications

IMU : MPU 6500
Communication :Full Duplex Bluetooth / Wifi
Weight: 500 grams.
Endurance : 13 minutes.
Radio Link Range : Bluetooth 30 meters / Wifi 100 meters
Diameter : 250mm.
Engine : 1534 KV electric brushless motor.
Control : Android Smartphone Flone App.
Payload : 200 grams (Smartphone or action camera).
Maximum payload : 300 grams.
Software of the app is licensed by GPL v3. Frame and the rest of elements are licensed under Creative Commons BY-SA.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354334/Flone_kit_b6spfc.jpg"
  },
  {
    title: "T300 Metal Wall-E Caterpillar Tank Chassis",
    subtitle: "T300 Aluminum Alloy Metal Wall-E Tank Track Caterpillar Chassis for Arduino NodeMCU",
    shop_id: 3,
    price: 99.50,
    quantity: 8,
    description: "Introduction

A novel design has already coming for the tank chassis, with beautiful shape, and full metal aluminum alloy structure. In this tank chassis, a space for 9g servo is left for the ultrasonic sensor, and a space for MG995 servo is also left to rotate the mechanical manipulator. What’smore, UNO R3 and NodeMCU development boards are also designed to install. In addition, the metal panel can be used to install the wheeled car by install the 25mm and/or 37mm motor frames. Interesting, a LED light is installed to brighten the dark in the night. Under the help of the motor, the tank chassis can be smoothly turn left, right, circle, forward and backward, ect. Therefore, when you get the chassis, it can do many things for you, like getting the temperature and mobile monitor. Certainly, we have developed a series of car/tank chassis. Hoping you can choose your loved car chassis.

Features

Noveland elegant appearance;

1) Reserve the space for 9g, MM95, MM96R gear;
2) Reserve for the intallation holes for UNO R3 and NodeMCU development board kit;
3) Reserve the space for robotic manipulator;
4) Design the LED light for the dark moving and brighten the light;
5) Add the 25mm and 37mm motor frame, can change the 4WD smart car;
Aluminum alloy;

1) The metal chassis is generated by aluminum alloy;
2) The bearing wheels and the driving wheels are metal;
3) The bearing wheelpiece is connected by the stainless steel and two bearings, which can let the bearing wheel is rotate freely with small frictions.
Solid structure;

1) The chassis can bearing the weight is about below 5kg; we test the 2.3kg;
2) All the chassis are metal, excluding the track (plastic).
Powerful force;

1) It is very powerful;
2) with Hall sensor and feedback; Quickly,stability, flexibility; Strong power;
Specifications

Name: T300 Intelligent track car/tank chassis
Material: aluminum alloy
Wheel: metal
Track: plastic
Product size: about 290270100mm (length * width * height)
Weight: 1700g
Color:golden yellow/silver.
Motor Parameters
Name:25mm gear motor
Output speed: 150±10%rpm
No_load current: 200mA (Max)
Stall current: 4500mA(max)
Stall torque: 9.5kgNaN
Rated speed: 100±10%rpm
Rated torque: 3000gNaN
Rated current: 1200mA (Max)
Noise :56dB
Working voltage: 9V
Outside Shaft Length: 14.5mm
Shaft End Play: 0.05-0.50mm
Screw Size： M3.0
Dia. Of Shaft phi 4mm, D3.5
Encoder: 2pulses/circle
Working voltage for sensor: 3-5V
Shipping List

Chassis:1 pcs
Driving wheels: 2 pcs
Bearing wheels: 10 pcs
Track:2 pcs (can be changed the length)
DC motor: 2 pcs
LED light: 2 pcs
Screws:several
Screw tools: 3 pcs

Note

For the shipping convenience, the tank/car chassis is unassembled.
Track can be connected by any length with a needle.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354326/tank_chassis_tohonz.jpg"
  },
  {
    title: "RGB Binary Clock KIT in Bamboo Case USB Powered",
    subtitle: "RGB Binary Clock KIT in Sustainable Bamboo Case USB Powered",
    shop_id: 3,
    price: 35.00,
    quantity: 24,
    description: "Now you can make your own 24-hour binary clock with seconds and amaze your friends and enemies! Can be powered by a USB connection from a computer, USB hub or even a USB charger! The time is set with a simple on-board touch sensor. The kit comes with a sustainable bamboo case.

Everything you need to build your own working 24 hour binary clock! This looks fantastic on a desk and screams, \"Yes, I am a total geek.\"

1 - High Quality Lead-Free Professionally Printed Circuit Board 2\"x2\"

1 - ATTINY44 Microcontroller

7 - Blue LEDs

7 - Green LEDs

7 - Red LEDs

2 - 25 pF Capacitors

1 - 16 Mhz Crystal

6 - 75 ohm Resistors

1 - Mini USB connector

1 - 2 Pin Connector (touch sensor)

1 - Bamboo Case as Shown in Pictures

Touch the sensor for 2-5 seconds to synchronize the clock to the nearest minute (forwards and backwards in time). Touch the sensor for more than 5 seconds and the time will advance, first through the minutes, then through the hours.

Watch the full demonstration video here!

Each part is clearly labeled on the printed circuit board for easy assembly. Soldering is required. All of the components are standard easy-to-work thru-hole type.

Paper instructions for assembly and operation are included with each kit. I have also made an easy-to-follow instruction guide you can see here.

Here is an overview video of the assembled kit:.

A great kit for a great price! This would be a fantastic parent child project.

This entire kit, hardware and firmware is designed and packaged by myself, a professional engineer, in the USA. I would be happy to answer any questions you might have.

I almost always ship the same day or the next day an order is placed.

I also offer a combined shipping discount if you order more than one kit! Just add them to your cart to see the shipping price.

Please look in my listings for other kits I have designed.

Thanks so much for looking and have a great day!",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354321/binary_clock_tcumtv.jpg"
  },
  {
    title: "SALE! - v.Air - CO2 Monitor",
    subtitle: "A feature-rich CO2 Monitor, at an affordable price",
    shop_id: 2,
    price: 39.00,
    quantity: 7,
    description: "*Note: * This listing is for the vAir - CO2 Monitor - Base Package. It comes with NO WiFi (+ $6), NO Display (+ $6) and with the less accurate sensor. If you want to order with any of those upgrades, please do this from vair.anker-bg.com

Overview

Keeping low levels of CO2 at home and in the office boosts health and productivity. The vAir - CO2 Monitor allows you to monitor those values and act accordingly.

The 6 RGB LEDs and the stylish white box make it a nice addon to your living room or office desk.
In addition an ambient light sensor adapts the brightness of the LEDs by dimming them during the night, so that it can be safely put inside the bedroom and not be disturbing.
The simplistic design with the colorful LED-Bar allows the information to be easily understood by anybody.
With the optional WiFi module the CO2 Monitor turns into a Smart Device, capable of reporting to online services or local server via HTTP and MQTT.
The device can be optionally eqiupped with an NDIR-based CO2 Sensor. While the accuracy of the standard sensor is +/- 150ppm @1000 ppm (15%), the NDIR Sensor enables higher precision: +/- 50ppm @1000ppm (5%).
The two USB Inputs - one on the back and one on the bottom allow different power configurations based on the customers' preference
The Firmware of both the CO2 and Wifi modules is Open-Source and available @Github, so extensions can easily be contributed by the community. Updates are done over the air
Not necessary an advantage, but worth mentioning is the fact that the enclosure is 3D printed. The main reason for this is flexibility and pricing, as real injection-molded enclosures would add a lot to the price, unless hundreds of devices are produced
Operation

Both types of devices need to be exposed to fresh air each 3 days so that they operate accurately. As with most CO2 Meters, there is some drift in the technical specifications of the CO2 Sensors. Therefore an ABC (Automatic Baseline Correction) algorithm is implemented which monitors which is the lowest CO2 level in the range of 3 days and sets this as 400 ppm (which is the expected outdoor level of CO2). Usually it is enough if the room with the CO2 sensor is not occupied for 5-6 hours, or when the room is intensively ventilated (Which is anyway necessary for healthy life :) )

Configuration

The setup of Wifi, Online Reporting and other options is done by connecting the device via a Micro USB cable to a Windows or Mac computer and then installing a Chrome App. Afterwards the device can work standalone

Connectivity

The list of supported connectors is growing, mainly based on customer demand. Currently the following ones are supported:

Custom HTTP Server
Custom MQTT Server
Predefined Servers

Thingspeak HTTP
Ubidots HTTP
SAP HCP HTTP
The update interval and threshold are user configurable",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354319/c02_monitor_lp5hrs.jpg"
  },
  {
    title: "Sleep Sensei",
    subtitle: "The Sleep Sensei is a sleep aid device that can help you fall asleep faster using breathing training.",
    shop_id: 1,
    price: 34.99,
    quantity: 5,
    description: "What is the Sleep Sensei?

The Sleep Sensei is a device to help people fall asleep faster using calming breathing training. It's for people who have trouble falling asleep, due to insomnia or an active mind at bedtime.

How does the Sleep Sensei work?

The Sleep Sensei produces a sinusoidal pattern of light that you follow with your breathing. As the light increases in brightness, you inhale, and as the light dims, you exhale, and the light is bright enough to be seen with your eyes closed. This pattern slows throughout the session, guiding your breathing to become slower, calming you down and inducing sleep. Also, if your mind tends to race at bedtime, the Sleep Sensei gives you something to focus on to help you fall asleep.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354319/sleep_sensei_v0f6xo.jpg"
  },
  {
    title: "Vintage Nixie Clock on IN-14 tubes",
    subtitle: "New, handmade digital clock in wooden case.",
    shop_id: 1,
    price: 295.00,
    quantity: 8,
    description: "Nixie Tube Clock
Fully handmade clock on vintage USSR nixie tubes IN-14.

Hard wooden case and brass logo styled to well known post-apocalyptic game.

Clock cases consist from classical materials.

Only wood and metal, just like in good old times.

24 or 12 hours time displaying format
Hours, minutes and seconds / date, month and year display
Selectable 6 level tubes brightness
Selectable 5 levels of blue backlight brightness (can be turned off)
Slot machine routine every 15 minutes (prevents cathode poisoning and extends tubes life)
Two modes of time displaying - regular and 'slot machine', can be selected in menu
Simple time / date / brightness adjusting - mode & set buttons on back panel
Extremely accurate time chip
Built-in battery, time backup during power interruptions
Size: 235 x 100 x 105 mm
Weight: 0.8 Kg
Power: 12V / 1.5A, adapter included
Woodcolor: mahogany
Please note! You can choose US or EU adapter plug type for your socket.

After confirming order, please notify us what type of power adapter you need..",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354356/vintage_nixie_clock_c9fnr7.jpg"
  },
  {
    title: "Brighttone 6\" music activated RGB LED Mini Moon",
    subtitle: "WATCH YOUR MUSIC PLAY. Sound-activated device connects colors and music.",
    shop_id: 3,
    price: 109.00,
    quantity: 42,
    description: "BrighTTone is able to connect surround sound with color waves creating a unique music-listening experience bringing a visual element to a party, casual gathering, or just a night at home by yourself. BrighTTone can be used by music and gadget enthusiasts, business owners looking to add a unique flair to their space, as well as professional musicians, as part of a live event or show. Use BrighTTone indoors or out.

BrighTTone has two modes of operation:

Static: Light can be displayed in 15 different colors. Colors can be changed manually or automatically, blink, and fade.

Sound-Activated: Brightness of the selected color is determined by the external sound that comes through the embedded high sensitivity microphone. In order to support different volume levels of the surround sounds, the device is equipped with an embedded automatic gain control circuitry (AGC) as well as with manually adjustable signal amplification, so the user has many ways to control brightness and colors dynamic.

Unit has configurable on the fly frequency filter so user can select one of the 15 frequencies bands to achieve best light effect based on the music played. In addition user can associate one of the 15 different colors to the selected frequency, on top user can add functions like \"color fade\", \"automatic color change\" etc. Unit has multilevel AGC ( automatic gain control) as well as manual signal adjustment.

BrighTTone can be used in a single or multiple displays installation and the whole set can be controlled from a single IR remote control using unicast or broadcast control. This way using multiple units and configure them for the different frequencies user can setup multi channel light music system responding to the played music. All the individual configurations can be changed, stored in the memory and hen subsequently retrieved.

Special functions include:

Auto calibration with 3 different signal scales levels (x1, x2, x4)
Store/retrieve sound parameters ( frequency, gain level, scale level, color)
Silence back-light (can be On/Off)
Each set includes:

Plastic 6\" mini Moon shape display, powered by the rechargeable Li-Ion battery
Wireless inductive charging base
IR remote control
AC/DC adapter with universal AC input.
Technical data:

Operation time: 6-8 hours
Charge time: 4-6 hours
Number LEDs: x 8 RGB type",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1473354316/mini_moon_aytpq5.jpg"
  }
])

CartItem.create([
  {
    user_id: 2,
    listing_id: 6,
    quantity: 3
  },
  {
    user_id: 2,
    listing_id: 4,
    quantity: 1
  },
  {
    user_id: 2,
    listing_id: 27,
    quantity: 5
  },
  {
    user_id: 1,
    listing_id: 6,
    quantity: 3
  },
  {
    user_id: 1,
    listing_id: 4,
    quantity: 1
  }
])

REVIEWS = [
  {
    rating: 5,
    comment: "Excellent! This worked very well for me."
  },
  {
    rating: 5,
    comment: "I am a very happy customer! Loved it!"
  },
  {
    rating: 5,
    comment: "Exactly as expected, except maybe a little better."
  },
  {
    rating: 4,
    comment: "Pretty good, not perfect."
  },
  {
    rating: 4,
    comment: "Overall I really liked it."
  },
  {
    rating: 3,
    comment: "This was okay."
  },
  {
    rating: 2,
    comment: "Not really what was described."
  },
  {
    rating: 1,
    comment: "Horrible. Shipping was slow. Not as pictured."
  }
]

Listing.all.each do |listing|
  3.times {
    review = REVIEWS[rand(8)]
    user_id = User.all[rand(User.all.length)].id
    review[:user_id] = user_id
    review[:listing_id] = listing.id
    Review.create(review)
  }
end
