##React Redux APP , Dockerized and integrated with AWS codebuild, Lambda & SNS

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This repo is Dockerized and integrated with AWS codebuild, Lambda & SNS

## Folder Structure



After creation, your project should look like this:


```
.
+-- src
|   +-- actions
|       +-- UserActions.js
|   +-- components
|       +-- index.js
|   +-- constants
|       +-- ActionTypes.js
|   +-- containers
|       +-- App.js
|   +-- reducers
|       +-- index.js
|   +-- index.js
+-- index.html
+-- app.css
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
