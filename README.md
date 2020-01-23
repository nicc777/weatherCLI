# weatherCLI

Building a command line application using Node.js - [https://pusher.com/tutorials/node-command-line-app](https://pusher.com/tutorials/node-command-line-app)

## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
$ git clone git@github.com:ammezie/weatherCLI.git
```

If you use https, use this instead

```bash
$ git clone https://github.com/ammezie/weatherCLI.git
```

After cloning, run:

```bash
$ npm install
```

Create an account on [APIXU](https://www.apixu.com) to obtain your API key, and add it inside `src/commands.js`:

Set the access key as an environment variable (safer than storing keys in source code):

```bash
$ export ACCESS_KEY="<YOUR APIXU KEY>"
```

Finally, run the command below to see the application usage menu:

```bash
$ node src/index.js --help
```

Optionally, you can also print the various variable values to the console by setting the DEBUG environment variable:

```bash
$ export DEBUG=1
```

## Built With

* [Commander](https://github.com/tj/commander.js) - The complete solution for Node.js command-line interfaces
