# developme-prep-app
An app to help students prepare for the Coding Fellowship

## Setup
The app currently requires a local version of the resources.developme.training site to use as a database. The repo, as well as installation instructions can be found here:
https://github.com/oliward/developme-resources
In the src/data/axios.js file, change baseURL to the address of your local environment.  

To run this app in production mode:
Fetch all files from the repository:
In the root folder, run `npm install` to install all dependencies listed in the package.json file.
Run `npm start` to start the app in production mode.

## Sass
The app uses sass to modularize the css. Navigate to the css folder and run:
sass --watch input.scss:output.css






