<!--
Press Ctrl+Shift+V (Windows, Linux) or Cmd+Shift+V (OSX) to preview this document!
-->

# Getting Started with Node, Express and Visual Studio Code
This is a sample customized for development using [Visual Studio Code](http://code.visualstudio.com) and [TypeScript](http://www.typescriptlang.org/).  

This sample illustrates:
- **Great IntelliSense**: [TypeScript definition files](https://github.com/borisyankov/DefinitelyTyped) provide IntelliSense for Node, Express, Mocha, and Gulp. Use [tsd](http://definitelytyped.org/tsd/) to install additional typings.

- **Iterative Development**: Use [BrowserSync](http://www.browsersync.io/) and [NodeMon](http://nodemon.io/) to automatically recycle your client and server while developing in Visual Studio Code. Run `gulp browser-sync` from the Terminal.

- **Build**: Compile your [TypeScript](http://typescriptlang.org/) files to JavaScript by pressing `Ctrl+Shift+B` (Windows, Linux) or `Cmd+Shift+B` (OS X). You can also let gulp watch for file changes and automatically build by running `gulp watch` from the terminal.

- **StyleSheets**: [LESS](http://lesscss.org/) is a CSS pre-processor that extends CSS to allow for typical programming construcs such as variables, mixins, and functions. To compile your .less file to .css press `Ctrl+P` (Windows, Linux) or `Cmd+P` (OS X) to bring up the Command Palette, and then type in `task less`.

- **Test**: [Mocha](http://mochajs.org/) is a popular test framework for Node applications. Press `Ctrl+Shift+T` (Windows, Linux) or `Cmd+Shift+T` (OS X) to run the tests.

- **Debugging**: [Launch Configurations](https://code.visualstudio.com/Docs/debugging) are used for running your application under the debugger as well as launching the Mocha tests under the debugger. Open the Debug viewlet, select `Launch ./src/www` and press `F5` to run the application.

- **Integration with existing tools**: [Task Configurations](https://code.visualstudio.com/Docs/tasks) allow for control over how individual [Gulp](http://gulpjs.com/) tasks are launched. Run individual tasks from the Command Palette by pressing `Ctrl+P` (Windows, Linux) or `Cmd+P` (OS X), type in `task` and then press `space` to see all of the tasks in the provided `gulpfile.js`.

For more information, please visit us at [code.visualstudio.com](http://code.visualstudio.com), read the [documentation](http://code.visualstudio.com/docs) and follow us on twitter [@code](https://twitter.com/code).
