[![Maintainability](https://api.codeclimate.com/v1/badges/ab367a13a6e13c19ec8e/maintainability)](https://codeclimate.com/github/katherine95/ireporter-frontend/maintainability)
[![npm version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)
# ireporter-frontend
iReporter is a web application that enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that needs government intervention.

**Usage**

* On the browser, visit the following url :
    
     * [iReporter-frontend]()

## Requirements

For development, you will only need Node.js installed on your environment and the node module `create-react-app` to generate a boilerplate version of a React application.

    $ node --version
    v8.10.0

    $ npm --version
    3.5.2

You will use npm to install the create-react-app command line interface (CLI) globally (-g).

    $ npm install -g create-react-app

### Prerequisites

```
Html5, CSS3, ES6, ReactJs 
```

**Application Features**

* Create an incident record
* Keep track of incident status


A normal user can perform the following :

* Create an incident record
* View his/her posted incidents
* Edit and update an incident. 
* Delete an incident.

An admin user can perform the following :

* Update status of a posted incident record
* View all incidents posted.
* View a list of registered users. 
* Make a normal user an admin.


## How To Manually Test It:

  1. Clone this repository:
  
    `git clone https://github.com/katherine95/ireporter-frontend`
   
  2. Change the directory into the project directory:
   
    `cd ireporter-frontend`
    
  3. Checkout to `develop` branch:
  
    `git checkout develop`

  4. Install project dependencies:
  
    `npm install`

  5. Start the server to run the app in the development mode.

    `npm start`

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.