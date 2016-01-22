# password-simple-manager
> Utility to manage password APIs, getting this from an external file created with this utility too

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install password-simple-manager --save-dev
```

## Usage
### Create pass.json file
To create your pass.json file:

(Optional). Make a symbolic link to use from shell directly. Run npm link from the password-simple-manager root folder 

```sh 
$ sudo npm link
```

Create pass.json, if the link is created run,

```sh
$ create
```

or 

```sh
~/your_project$ node node_modules/password-simple-manager/bin/create.js
```

#### Options
##### path_to_pass_json
**Optional**
Default: userHome

As default the pass.json file will be created in the user home. If you don't want use this directory to save the pass.json file, you must to indicate it with this parameter

### Replace pass on file

```sh
$ replace path_to_files recursive
```

or 

```sh
~/your_project$ node node_modules/password-simple-manager/bin/replace.js path_to_files recursive
```

#### Options

##### path_to_files
**Mandatory**
Type: string
Path to folder where there is the files or only file to replace tags by API keys and Ids

##### recursive
**Optional**
Type: bool
Default: false

If you point to a folder use recursive = *true*

##### path_to_pass_json
**Optional**
Type: string
Default: userHome

If pass.json file has been created in other folder, you will need point to this file using this parameter

##Using module via script

In the package.json:

```js
  ...,
  "scripts": {
    "create": "node node_modules/npm-tmb/bin/create.js",
    "replace": "node node_modules/npm-tmb/bin/replace.js '<path/to/replace>' <recursive>"
  },
  ...
  ```

```sh
$ npm run create
```
```sh
$ npm run replace
```

## LICENSE 

(The MIT License)

Copyright (c) 2016 Micho García <micho.garcia@geomati.co>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.