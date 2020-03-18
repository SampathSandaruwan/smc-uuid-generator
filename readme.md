# mypluralize
A Node.js module that returns random text of 128 digits of base 16 
## Installation 
```sh
npm install smc-uuid-generator --save
```
## Usage
### Javascript
```javascript
var newUUID = require('smc-uuid-generator');
var uuid = newUUID.generateUUID();
```
```sh
Output should be 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' long uuid
```
### TypeScript
```typescript
import { generateUUID } from 'smc-uuid-generator';
console.log(generateUUID());
```
```sh
Output should be 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' long uuid
```
### AMD
```javascript
define(function(require,exports,module){
  var newUUID = require('smc-uuid-generator');
});
```
## Test 
```sh
npm run test
```