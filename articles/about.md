# Isomorphic blog example

This is an example of simple isomorphic javascript application. The app is a blog who serves markdown articles.
### Techs

+ [Browserify](http://browserify.org/)
+ [Express](http://expressjs.com/)
+ [es6-promise](https://github.com/jakearchibald/es6-promise)
+ [Flux](https://facebook.github.io/flux/)
+ [React](http://facebook.github.io/react/)
+ [React-router](https://github.com/rackt/react-router)

### Compile

To build the client application run:
```
browserify src/browser.js -o public/build.js
```

To start the server:
```
node index.js
```

### Package.json

To understand how server modules are override in client build, watch the ```browser``` field in package.json. [And read here](https://github.com/substack/browserify-handbook#browser-field).

### Articles
In ```articles/``` folder you will find all the markdown files used by the app. The app simply read the content of the folder and compile the file requested. It doesn't use slug or ids, simply the file name.
