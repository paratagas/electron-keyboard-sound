# Electron keyboard sound

### Cross platform app created using Node.js and complied to desktop using Electron

![Electron keyboard sound](https://i.imgur.com/JufqtbS.png)

---

### Tech
Electron keyboard sound uses several open source projects to work properly:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Electron] - Cross platform tool to compile web-apps to desktop

---

### Requirements

* [Node.js](https://nodejs.org/) v4.4+
---

### Installation

* Download and extract the [latest version of Electron keyboard sound](https://github.com/paratagas/electron-keyboard-sound)
* Download and install the [latest version of Electron](http://electron.atom.io/releases/) for your platform
* Install the dependencies and devDependencies:
```sh
$ cd electron-keyboard-sound
$ npm install
```

* **Run Node.js server:**
```sh
$ npm start
```
* Run desktop compilation:
```sh
$ npm run package
```

**In "~/release..." folder get version for your platform and launch it**

---

After that your web application is available on:

```sh
http://localhost:3000
```

---

### Other

***Nota bene:*** You can istall Electron pre-builder and compiler modules manually by:
```sh
$ npm install --save-dev electron-prebuilt
$ npm install --save-dev electron-packager
```

---

### License

MIT

 [Node.js]: <https://nodejs.org/>
 [Electron]: <http://electron.atom.io/>
 