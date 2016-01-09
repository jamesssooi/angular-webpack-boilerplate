# Angular Webpack Boilerplate
A basic boilerplate template to get your angular web app up and running in seconds!

## Usage

### Basics
To start watching .js and .scss files for changes, simply type `gulp` in the folder terminal.

#### Angular Folder Structure
This boilerplate was made to conform to the angular folder structure as described in this [article](https://scotch.io/tutorials/angularjs-best-practices-directory-structure). For example:
```
components
   │
   ├─ sidebar
   │    ├─ SidebarController.js
   │    ├─ SidebarService.js
   │    └─ Sidebar.html
   │
   └─ user_profile
        ├─ UserProfile.js
        └─ UserProfile.html
```

### Building
To build your project for production, type `gulp build` in the folder terminal. All .js and .css files will be concatenated and minified.
