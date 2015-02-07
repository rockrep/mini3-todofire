Mini Project 1: Todo List
============

##Objectives
The purpose of this Mini Project is to get you used to getting started from scratch with React and Webpack. You'll be building a very basic Todo App (LINK HERE) in React. This app should be the perfect introduction to the material that was covered earlier. This app will have multiple components, some of those components will have their own state, you'll be passing data down as props, and you'll have your own events. 

###Step 1: Create the Structure for Your Application
* Go ahead and create a folder structure that looks like this including the files. (If you're opinionted about your folder structure, feel free to experiment what works best for you).
```
├── webpack.config.js
├── app/
│   ├── AddItem.js
│   ├── App.js
│   ├── List.js
│   ├── ListContainer.js
├── public/
│   ├── index.html
```
Notice we haven't included any CSS. Because this project is rather small (and because the project later today is going to build off of this one so we're going for maximum composition), all of my CSS is going to be JavaScript Objects which live inside the component which is using that specific style. 
* Now that your folder structure is set up, let's go ahead and interactively create a package.json file so we can specify which npm packages we'll need in our app. *If you are unfamiliar with NPM, flag down a mentor and we'll come over and expound on this topic*.
* cd over to the root of your project and run ```npm init```. This will guide you through some steps that aren't too important. Once you're done with the steps you'll have a package.json file in your root directory.
* We're only going to need one dependency and two dev dependencies for our project. 
* In that same root location you were at before run ```npm install --save react```. This will grab React from NPM and save it into a newly created node_modules folder in the root of your directory. This also tells your package.json file that React is a dependecy that's neccessary for the app to run. 
* Once again in the same root directory run ```npm install --save-dev webpack``` and ```npm install --save-dev jsx-loader``` these commands will install webpack and jsx-loader inside our node_modules folder while letting our package.json file know that both of these are developer depedencies are required to develop but not the run the actual app. 
* Now that the basic skeleton of our app is ready, let's head over to our ```webpack.config.js``` file and fill that out.


###Step 2: Configuring Webpack
* As we talked about in the lecture, Webpack is a super powerful tool that can do a lot. Starting out though, we'll just use Webpack to transform our JSX to JS. 
* We're going to give our Webpack config file three things. 
  - The entry point where our main parent component is located.
  - Our JSX loader which will do the converting from JSX to JS
  - An output path of where to put our new bundled/transformed React code.
* Head over to your webpack.config.js file and add the following code. 
```javascript
module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
```
Note that our file structure is set up in such a way that our ```app``` folder will be used for our React components and webpack will take those components, transform them, bundle them, and output them to our public folder where our ```index.html``` file is located. 

###Step 3: Our First Component
* Head over to your index.html page and add the following code.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>React Bootstrap Todo List</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```
Notice its pretty normal. We've included bootstrap and we're added an element with an id of app. We'll render our App component to this html element later in our App.js file.

* Before we start building our app, let's head over to our App.js file and create our first component in order to make sure everything is working correctly. 
* In App.js require 'react' and save it into a variable called React.
* Create a component that all is does is render "Hello World!" to the page and save that into a variable called ```App```
* Now, use ```React.render``` to render your ```<App />``` component to the app element in your index.html page.
* Head over to your terminal and tell webpack to build and watch your files using ```webpack -w```. 
* Open up your ```index.html``` and verify that you see ```Hello World!``` and you're getting no errors in the console. 
* If you are getting errors, debug. If you get stuck, flag down a mentor.

Your current App.js file should look like this.

```javascript
var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
```

###Step 4: More Components
* Now that our build process is up and running, let's crank out the rest of our directives. 
* We're going to be making four components all together. Here is a list of all of them with their purpose and how they fit into our app hierarchy. 
```
├── App
│   ├── ListContainer
│   ├-─ ├── AddItem
│   ├-─ ├── List
```

Visually represented that looks like this. 
![React Components Visualized](http://tylermcginnis.com/ReactWeek/todo-react-components.png)
The darker the red the more nested the components are. 
 - App is our overall component
 - ListContainer is the component of our todolist and the lists title
 - AddItem is the component of the input box
 - List is the component of every item in the list

