React Tailwind Storybook Dream Setup BOILERPLATE
==========================================================
You can use this boilerplate for your own projects.

It includes a complete dev-setup with:
--------------------------------------
* React
* TailwindCSS
* TailwindUI 
* CSSTransitions with react-transition-group
* PostCss
* PurgeCss (minimizes css files on production)
* Autoprefixer (for better Browser Support)
* ESLint
* Storybook (more Addons coming soon)

How to use the APP Boilerplate
----------------------------

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## NOTE: Do not modify this repository because its a boilerplate

How to upload your modified APP to your own repository
------------------------------------------------------

1.  Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. 
    You can add these files after your project has been pushed to GitHub.

2.  Open Terminal and Change the current working directory to your local project.(your modified boilerplate you cloned before)

3.  Initialize the local directory as a Git repository with `git init`

4.  Add the files in your new local repository with `git add .` 
    (This adds all your changes you did and stages them for the first commit.To unstage a file, use 'git reset HEAD YOUR-FILE')

5.  Commit the files that you've staged in your local repository with `git commit -m "First commit"` 
    (This commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and
    modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.)

6.  At the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.

7.  In Terminal, add the URL for the remote repository where your local repository will be pushed with:
    `git remote add origin remote repository URL` (this sets the new remote)

8.  Verify the new remote URL, to be sure you did it right with `git remote -v`

9.  Push the changes in your local repository to GitHub with `git push origin master`
    (Pushes the changes in your local repository up to the remote repository you specified as the origin) 

How you make this boilerplate yourself from scratch: 
===============================================================================

3 links I used to fully setup the boilerplate:
-------------------------------------------------------
Reactjs Tailwind Postcss setup: https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/ : 

Component-library-with-storybook-tailwind-css-and-typescript: https://medium.com/better-programming/start-a-component-library-with-storybook-tailwind-css-and-typescript-ebaffc33d098

Storybook Docs: https://storybook.js.org/

## How to craft the Typescript React Tailwind Storybook Boilerplate:
mkdir projectname
cd projectname
npx create-react-app . 
### or this works too
npx create-react-app your-projectname && cd your-projectname

### open your boilerplate in editor
code .

### Note ! delete everything in src folder except App.js & index.js and all the unused imports

### Next, we install a few development dependencies.
npm install tailwindcss postcss-cli autoprefixer -D
### We’ll process Tailwind with PostCSS, and autoprefixer will parse the CSS and add vendor prefixes for browser support.

### We need to initialize Tailwind CSS by creating the default configurations. Type the command below in your terminal:
npx tailwind init tailwind.js --full
### This command creates a tailwind.js in your project’s base directory; the file contains the configuration, such as our colors, 
### themes, media queries, and so on. It’s a useful file that helps with predefined sets of properties which will aid the need to 
### re-brand certain conventions or properties if the need arises.

### Create a PostCSS configuration file in your base directory manually or using the command:
touch postcss.config.js

### Add the following lines of code to your PostCSS file:
```
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
```
### What the above code says:
* We fetched the Tailwind CSS package and placed it in a variable.
* We wrapped tailwind.js (our default base configuration) in our tailwindcss variable.
* We fetched the autoprefixer package.
### Because PostCSS is necessary to lint our CSS, hence this configuration.


### Inside your src folder create a folder, name it assets, this is where all your styles would be stored. In that folder, create a tailwind.css file and main.css file.
mkdir assets
cd src/assets
touch tailwind.css main.css
### The tailwind.css file will be used by us to import Tailwind CSS styles, and for custom configurations and rules. The main.css will hold the styles that are generated
### as a result of what we have in the tailwind.css file.


### Next, we need to import the base styles and configurations. We will do that in one of the CSS files we created above. 
### Add the following to your tailwind.css file:
```
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";

```

### Next, we need to configure our project to build our CSS styles each
### time we run either the npm start
### edit your package.json file scripts part to this:
```
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css", 
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

### We need to import our CSS file appropriately to ensure that it’s properly watched and built when we run yarn start or npm start
### Open your index.js file and make the following changes:
```
import './assets/main.css'
```
### Your *index.js* should look like this after the changes:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import App from './App';

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
```
React Tailwind Postcss Autoprefixer Setup Done !!
====================================================================================================


Storybook setup starts here:
===================================================================================================
### In most cases, Storybook will detect that you’re using react or react-scripts, and install the appropriate packages with:
```
npx -p @storybook/cli sb init
```

### .storybook/main.js file should look like this:
```
module.exports = {
  stories: ['../src/**/*.stories.js*'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
```
### package.json script for storybook should looke like this:
```
"storybook": "start-storybook -p 9009 -s public",
"build-storybook": "build-storybook -s public"
```



### Now if we npm run build-storybook and npm run storybook afterwards it should be done!

### Note dont forget to add storybook boilerplate like this:
```
import React from "react";
import '../assets/main.css';
import TestButton from "../components/TestButton";


export default {
    title: 'Tests',
};

export const redTestButton = () => (
    <TestButton />
)
export const greenTestButton = () => (
    <TestButton className="bg-green-700" />
)
```
## The real Component should look like this:
```
import React from 'react'

const TestButton = ({ className }) => {
    return (
        <button className={`${className} bg-red-500 text-white py-2 px-4 rounded-md shadow-md`}>Submit</button>
    )
}

export default TestButton
```
### How to use the @apply feature to extract repeated utility patterns/classes. 
* Note: You have to rebuild until it works again !
* Just add your custom classNames to your tailwind.css file like this:
```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.btn-red {
    @apply bg-red-400 text-6xl;
};
```

///////////////////////////////////////////////////////////////////////////////////////
////// THATS IT ///////////////////////////////////////////////////////////////////////
////// HAVE FUN ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
=======================================================================================




## create-react-app README starts here:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
