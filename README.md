#2016\_IMY320\_Cynamin
##IMY 320 Project Proposal

The name of the NGO is **Threads** which is NGO dedicated to providing clothes to the homeless.

#The Technology
The technologies that will be used to make the website and the mobile app will be React (React Native for the Mobile App) and Redux for the data store and Redux-Sagas for handling async code in the frontend and the backend will be written in JavaScript using NodeJS and Express

##On the front end we have...
###React and React Native
React is a view library developed by Facebook written in JS and React Native is the native app counterpart to React. React Native allows for programming native apps using JSinstead of native code which speeds up developement. This allows for code sharing between the platforms.
**But wait**, aren't hybrid apps __slow__?
React Native mitigates the slowness that comes from hybrids by not wrapping HTML, CSS and JS in a native app.
React Native runs JS in a seperate thread which interprets the the JS code and bridges the results of that code to the native platform using the platforms API. That being said React Native isn't as fast as native apps but speed isn't everything in app developement.

###Redux
Redux is defined as a __Predictable State Container for JavaScript apps__. It allows for all state data to be stored in an __object tree inside a single store__.
Changes the store are done via emitting actions (and object that describe what happened that should cause the state to change).
Reducers (functions that modify the part of the state to which they are assigned) __specify how the actions change the state__.

###Redux Saga
Redux sags is a library for handling asynchronous code using the ES6 Generators to make asynchronous flow easier to read, write and test (avoids callback hell) because the asynchronous code looks like synchronous code.

##And on the backend we have...
###Node.js
Node.js is a JavaScript runtime environment built on the V8 JavaScript engine (NodeJs is really just a platform that allows developers to write JS outside of a browser). It is event driven and uses a non-blocking I/O model.

###Koa
A NodeJs Framework for building http servers using JS. This will be used as an API for both the mobile and the web app.

###Webpack Dev Server
A webpack developement server for allowing hot reloading of code. Unlike live reload or equivalents which reloads the browser, hot reloading code plugs new code changes without needing a refresh by using webpack's Hot Module Replacement.

##Group Members
Tula Raphala and all his split personalities
