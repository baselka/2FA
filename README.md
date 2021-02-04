# Simple application to test 2FA using Google Authenticator. 

### This is a simple NodeJs app implemented in ExpressJs framework to test 2FA with simple ReactJs UI.
______________________________________________________________________

## Installation & Configuration

#### Clone the repo
```
// open your terminal and clone the repo 
$ git clone https://github.com/baselka/2FA.git
```
### Extract project used packages
* Run the follwing command in both main project directory and client .
````
// inside the cloned project dir
$ npm install
$ cd client
$ npm install 
$ cd ..
````
### Start the project :
````
// inside the main dir /2FA
$ npm run dev
````
______________________________________________________________________

# Now the app is runnng, the server is running on port 5000 and the ReactJs (UI) running on port 3333.  

### Usage instructions :
#### - Open http://localhost:3333 in your browser .
#### - Signup using Email, Name and Password and click Signup .
#### - A QR code will show above the form, scan the QR code with your Google Authenticator app.
#### - A new app account will be added to your Google Authenticator the app name is "SSO Decenternet".
#### - Click "Go back to login" and enter the Email and Password.
#### - A modal will popup for you to enter the 6 digits code appears in your Google Authenticator app.
#### - If the 6 digits code matched a green alert will show to confirm the code matched.
#### - If the code not matched a red alert will show Code Not Matched.
______________________________________________________________________
