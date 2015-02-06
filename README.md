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
* 

