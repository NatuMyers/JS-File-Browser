
To run
===================
Download then,
```bash 
npm install http-server -g; http-server
```

Result
===================


![](https://i.gyazo.com/e43ad883dda3e621ec4217d250ffb5d3.gif)



SETTING UP/ COMPILING SASS FILES
===================

##### Run an "npm install" to get the latest dependencies!!!
  

##### TO COMPILE A SASS FILE AND QUICKLY CHANGE COLOR SCHEME, 

```javascript 
gem install sass; sudo gem install sass; sass --watch materialize.scss:materialize.css 
```

#####IN THE DIRECTORY OF the .scss file. Drag the new .css to replace the old one, and voila quick color scheming


angular-materialize
===================

**angular-materialize** in action http://krescruz.github.io/angular-materialize/

This library is a set of AngularJS directives which make it possible to use features from [Materialize](http://materializecss.com/) with AngularJS.

Just add the module ui.materialize to your dependencies like:

    angular.module('angular-app', [
      'ui.materialize'
    ])

and then you are good to go.

This is not to be confused with the [Angular Material](https://material.angularjs.org/) project, which is a standalone Material design implementation for AngularJS.

We are on Bower, look for [`angular-materialize`](http://bower.io/search/?q=angular-materialize).
or in NPM, look for [`angular-materialize`](https://www.npmjs.com/package/angular-materialize).

##### Use with Webpack
Angular looks for jQuery and if no exists, it uses jQlite. Some directives of `angular-materialize` uses some jQuery methods, so be sure that Angular uses it instead of jQlite. It can be done by adding the following lines in your config.
```javascript
//webpack.config.js
plugins: [
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    })
  ],
```
then simply add to your module:
```javascript
// yourModule.js
// ES6 style
import angularMaterialize from 'angular-materialize';
// OR commonjs style
var angularMaterialize = require('angular-materialize');
angular.module('yourModule', [angularMaterialize]);
```



TASK GIVEN: Web Dev Coding Test
===================

Create a simple JavaScript application that allows the user to navigate a file
system -- i.e. like Finder (Mac) or Explorer (Windows). Just navigation. No need
to provide any additional features, just the ability to "visit" folders and see
their contents.

Use the provided HTML, JS, CSS structure as a starting point. You're welcome to include
3rd party libraries as you see fit, but we'd prefer if you avoid ones that do too much
rendering of content; that's kind of what we're testing here.

The file system is provided for you in the form of JavaScript API. See below
for details.

Add a bit of CSS to make it look nice. Feel free to show off your CSS chops!

File System
-----------
The file system API is a very basic with a single function:

filedata.getFilesForPath( path, callback )

    path: String - the path whose child files/folders you want

    callback: Function(err, files) - function that gets called to provide the
              results. If an error occurs then err will be an error message,
              but will otherwise be null. The files argument will be an array
              of objects representing files or folders.

Example:

    filedata.getFilesForPath("/Documents", function(err, files) {
        console.log("Error: ", err);
        console.log("Files: ", files);
    });

Paths are Unix-style paths beginning with slash (/) -- i.e. /Documents/tax stuff/invoices
The root path is represented as /.
