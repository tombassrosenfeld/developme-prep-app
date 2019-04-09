# developme-prep-app
An app to help students prepare for the Coding Fellowship

## Setup
The app currently requires a local version of the resources.developme.training site to use as a database. The repo, as well as installation instructions can be found here:  
https://github.com/oliward/developme-resources  
In the src/data/axios.js file, change baseURL to the address of your local environment.  

To run this app in production mode:  
Fetch all files from the repository:  
In the root folder, run `yarn add` to install all dependencies listed in the package.json file.  
Run `yarn start` to start the app in production mode.  

## Environment Variables
Create a file .env at the root of your project. This will store all variables to change between each environment. An example of the variables currently in use can be found at .env.example. Please update this file whenever you need to add environment variables. Create-React-App requires that all env variables are prefixed with `REACT_APP_`.
  
## Sass
The app uses sass to modularize the css. Navigate to the css folder and run:  
sass --watch input.scss:output.css  

## Jest Unit Testing
Create React App ships with Jest as standard. In order to run the unit tests you will need to:

* Run ```npm install``` to get the Jest CLI tools
* Run ```npm test``` which sets up a watch task for all of the defined tests.

When creating a feature branch, you should keep the watch task running and only create a pull request if all tests are satisfied.

### Creating your own tests

Tests should added to the __tests__ folder and a new file created per type of test. E.g. if you're testing the reducer the file should be named - test.reducer.js.

#### Syntax

**describe()** describes the title of the test being carried out.

**it()** is a function that accepts 2 arguments:
* The expected outcome as a string
* A callback function containing code to run the test

**expect()** a function that returns the Jest object (after performing the logic you wish to test within your app) where you can chain matchers, allowing you to test against the expected result (e.g. toEqual()).

The below example, calls the reducer function passing in an empty state, with no action type, and is expected to return the initial state.

```
describe('Basic testing', () => {
  it('should return the initial state', () => {
    expect(reducer({}, {type: null})).toEqual(initial);
  });
```

#### Mock Data

You can use or add addtional mock data (such as API responses, action creators) in the mock_data directory.

#### Local Server - app.developme.box

To test 404 handling and persisted state, you should set a separate vagrant environment for testing and deploy the app to the public folder.

Create a .htaccess file in the public directory and add the following:

```
RewriteEngine on
# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
# Rewrite everything else to index.html to allow html5 state linksP
RewriteRule ^ index.html [L]
```
Your local server should have HTTPS enabled to mirror the production environment, visit the link below to set this up. <a href="https://docs.google.com/document/d/1mP1_DxMFs_seMqqZQ0UjEU9eR7ybebpEuw2BnLApv9w/edit?usp=sharing"">Enable HTTPS and create a SSL certificate for your local server</a>




