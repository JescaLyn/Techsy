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
    description: "Elegant and simple products",
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
    price: 160.00,
    quantity: 19,
    description: "The Mechanical Bird Armature is designed to have the ability to fit the profile of many small birds, ranging from Parrots, Cockatoos, Owls, Peregrine Falcons, Hawks, and any other bird of the same profile.
This kind of device can then be used as a Bird Lure to help aid in the research into raptors, or as a Bird Decoy to help solve pest problems in and around city's.
Im also making these as animatronic film props as well as for use in TV commercials and programs, and theatre props, along with Attractions, exhibitions and maybe even just a party piece to intrigue your guests.",
    image_url: "http://res.cloudinary.com/dzikfml7y/image/upload/v1472765582/animatronic_owl_qzguwo.jpg"
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
