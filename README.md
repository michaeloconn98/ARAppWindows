# Augmented Reality Experience App - Documentation - Windows Version
First fully developed protoype of this app bringing a connection between Augmented Reality and social immersion. 

This repository is for running the application on a Windows PC **ONLY**. The repository for the running the application on a OSX/Linux PC can be found at: https://github.com/michaeloconn98/ARApp

### About 
This application hopes to provide a reference to the social value that can be gained from interactive technologies. In particular this application focuses on implementing basic Augmented Reality features into an interactive environment. 

With the hope that this app brings to life the match day buzz. A user will be able to view and interact with various types of multimedia ranging from 3D objects to videos. 

All this with the hope of delivering an interactive application allowing users to feel more involved on a match day.

### Prerequisites

#### Mobile Device:
* iOS Device
  * iPhone: iPhone 6s and above
  * iPad: iPad 5th generation and above
  * Operating System: iOS11 or higher 
    * Follow this [guide](https://support.apple.com/en-us/HT201685) to check your iOS version 
* Android Device
  * An [ARCore supported device](https://developers.google.com/ar/discover/supported-devices)
  
On this device the following app needs to be installed on the device in question.

#### Viro Media App:
* iOS
  * [Viro Media App](https://apps.apple.com/us/app/viro-media/id1163100576)
* Android
  * [Viro Media App](https://play.google.com/store/apps/details?id=com.viromedia.viromedia)

The penultimate step is to fetch the project directory and save it to your home directory. Either via cloning this repository or fetching the main folder from a saved location.

Make sure all these steps are completed before continuing.

To start the application up for it to be ran on your mobile device you need to run the application on a Windows PC. The following steps detail how to do this and more.

### Installation
In the terminal app of preference, the following commands need to be entered. 

#### Windows

1. Install Node and the React Native CLI
    1. Install Homebrew by running the following command in Administrator Command Prompt: Node, Python2, JDK 
    ```
    choco install -y nodejs.install python2 jdk8
    ```
    2. React Native CLI
    
    Install React Native CLI by running the following command in the command prompt:
    ```
    npx react-native 
    ``` 
2. Move into the project directory on your machine and run the package server
    ```
    cd ARApp
    ```
    From the root of the above project achieved by the above command, run the following command
    ```
    npm start
    ```

### Running the Application
To run the application on your mobile device simply open up the Viro Media App and enter the testbed via the menu icon in the top left of the screen.

To run the application:
* On Windows enter your PC's IP Address, into the input box on the Viro Media App.

Once 'Go' is pressed on the Viro Media App, this application will load up within the testbed.

### Using the Application
Once the application has loaded a screen will appear to prompt selection on type of reality scene between an ‘AR’ or ‘VR’ scene. For this application the ‘AR’ option needs to be chosen. 

At this point the scene will load up initially presented the following message ‘Initializing AR...’.

As the application successfully loads the message above will change to ‘Newcastle United AR Experience’, with a 3D representation of the Newcastle United presented below the test.

If the camera is moved to the right a video should be displayed.

If the camera is moved to the left from the first screen then a sound file will begin and continue to play as the camera is moved. 

The 3D object shown in the first screen can be interacted with via a simple drag allowing the object to be moved in a confined area. The object can be can also be enlarged through a simple pinch gesture on the screen.  

**Having issues?**

**If there are any issues loading the scene, try shaking the device until a development menu appears and hit "Reload". If the app is being used on an iOS device double-check that the ngrok URL entered was correct or try using the local IP address of PC in use (the mobile device will need to be on the same network).**

### Notes
* At this stage it should be acknowledged that this application is a prototype and is not the finished article.
* This application will be developed further in the future.

### Useful Resources
* For information on the platform [Viro Media](https://docs.viromedia.com/docs/viro-platform-overview) refer to this link.
* If you get issues with building the application on a Windows PC refer to this [link](http://reactnative.dev/docs/environment-setup).
* To contact myself please contact me on michael.oconn@hotmail.co.uk

### Credits
Michael O'Connor
