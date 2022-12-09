# What Sound_Spatialization is
A website that leverages a combination of the GPS and Gyroscope sensors in modern smartphones, through JavaScript's web APIs, to help users navigate a pre-defined path.\
The goal with this proof of concept is to help advance the technology visually impaired individuals have available and to help them navigate the world in a more comfortable, independent and safe way, be it while running a marathon or walking in a park.\
This project was in part inspired by ![Google's Project Guideline](https://ai.googleblog.com/2021/05/project-guideline-enabling-those-with.html)

# How it works
It allows you to set GPS points along your desired path, which hold information about the angle you must face to reach the next point.\
This incorporates the general absolute location provided by GPS with the precise relative alpha angle provided by the Gyroscope.\
<img src="https://user-images.githubusercontent.com/73020909/205403691-e502c42a-05d7-441c-b5d2-d00805f52f9f.png" width="200">

# How to use it
Navigate to https://gugajazz.github.io/SoundSpatialization on a modern smartphone and give it permission to access your GPS location. All data including GPS coordinates is kept locally at all times.


The user should start by walking over to where they want the path to start.\
Then press reset <img src="https://user-images.githubusercontent.com/73020909/205400069-6543c2b9-7bd8-4824-a1e4-f478acb7b260.png" width="100"> whith the phone screen facing up and pointing at the direction you wish to go.
In that same place and holding the same heading create a point <img src="https://user-images.githubusercontent.com/73020909/205400176-e0f5d3a0-d8f0-4270-9613-0fd26a6ff15a.png" width="100">\
When you reach a location where your heading must change point your phone towards the new direction and then create a new point.\
Do this until the path is complete. The path can form a line or circle.\
When the user is back at the path's starting point they can press start <img src="https://user-images.githubusercontent.com/73020909/205402644-4b3a7be0-c5f9-4cc3-92a9-c16060cbc5f5.png" width="100"> and be guided by the sound to the final point.\
If you hear a beep in the left or right you must turn towards that side to keep following the correct heading.\
At any point the user can stop the auditory feedback by clicking the stop button <img src="https://user-images.githubusercontent.com/73020909/205402793-3b59f265-484f-4052-8908-7277beb62ee6.png" width="100">.

When looking at the map there are 3 different types of points, the gold one indicates the user's current position, the red indicates every point that isn't the current point and the blue indicates the point the user currently is on. 
<img src="https://user-images.githubusercontent.com/73020909/205400779-153d6471-acf1-4514-a5ef-20b153d97692.png" width="25">
<img src="https://user-images.githubusercontent.com/73020909/205400783-0ba62ff7-c2a3-495c-9a72-3b0da755c81b.png" width="25">
<img src="https://user-images.githubusercontent.com/73020909/205400785-f0d26155-7543-4611-9ea9-d3657230130e.png" width="25">

# Example animation
https://user-images.githubusercontent.com/73020909/205340509-378138f4-bce9-49bd-805f-1a69d9a6ca07.mov

# Results and possible applications
The idea and code implementation work nicely to guide the user in the created path.\
This idea could be employed by sporting events like foot races and marathons. Since they take place in a pre-defined circuit a mesh of point could be generated for it and visually impaired atlethes could use their smartphone to guide them through the circuit.\
A more refined and sophisticated version could additionally be used to give more feedback to visually impaired individuals when navigating with the help of map apps.

# Warnings
This code is ment only as a prof of concept and doesn't intend to replace more conventional tools like the guide cane, merely to augment them.\
Test it in a big, open space with no obstacles or dangers and in a safe, responsible way.

# Chalenges and limitations:
As mentioned previously all data, including GPS coordinates, is kept locally at all times and lost when the website refreshes.\
This is a benefit when it comes to privacy and reliability, as the only responsibility of the server is to host the website, but it isn't practical for actual day-to-day use.\
The UI also needs improvement in many areas, and that is the next step for this project.
