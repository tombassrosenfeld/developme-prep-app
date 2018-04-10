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


