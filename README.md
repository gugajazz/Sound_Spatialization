
# What Sound_Spatialization is
A website that leverages a combination of the GPS and Gyroscope sensors in modern smartphones, through javascript's web apis, to help users navigate a pre-defined path.\
The goal with this proof of concept is to help advance the tecnoogy visually impaired individuals have available and to help them navigate the world in a more confortable, independent and safe way, be it while running a marathon or walking in a park.

# How it works
It allows you to set GPS points allong your desired path, which hold information about the angle you must face to reach the next point.\
This incorporates the general absolute location provided by GPS with the precise relative alpha angle provided by the Gyroscope.

# How to use it
Navigate to https://gugajazz.github.io/SoundSpatialization on a modern smatphone and give it permission to access your GPS location. All data including GPS coordinates is kept locally at all times.\

# Example animation
![](img/animation.gif)

## Send data
<img src="imgs/send1.png" width="350">
Type your message ( Expect around 1s for each character to be sent on default settings )

## Receive data
<img src="imgs/receive1.png" width="350">
<img src="imgs/receive2.png" width="350">
While waiting the red light will look as shown <img src="imgs/receive3.png" width="150">
When a signal is coming in ripples will appear as shown <img src="imgs/receive4.png" width="150">

# Warnings
By default, sine-messaging-react uses frequencies between 18200hz and 18800hz. Frequencies in this range usually aren't audible by humans but can and will still cause hearing damage if listened to at unsafe levels.\
It is then recommended  that for short range communication ( <5m ) the users use a low volume, which usually is enough, and increase it progressively if necessary to achieve reliability opperation at longer ranges.

# Results
This project was mostly a proof of concept to show that data can be transmited through sound at inaudible frequencies using common, every-day hardware, across platforms and fully offline (excluding loading the website).

With that being said there are multiple paths that could and perhaps will be taken in the future to improve performance and reliability.
The default settings aim to work across the widest range of hardware, from phones to tablets, PCs and maybe some fridges. For those reasons they can be tweaked to vastly improve the trasmition times.

Results with **default** settings:

- Bit rate:\
  Little over 8 bits / second. Aka 1 character a second or a Baud rate of 1.


- Range:\
  Multiple meters while remaining at a safe volume and small error rate.

# Chalenges and limitations:
As mentioned previously all data, including GPS coordinates, is kept locally at all times and lost on website refreshes.\
This is a benifit when it comes to privacy and reliability, as the only responsability of the server is to host the website, but it isn't practical for actual day-to-day use. 


# Changing default settings:
In order for the transmission and reception of data to work it's necessary that every device communicating shares the same values for their settings.\
This is the case by default but must be taken in to consideration when chaging the settings. 