# SMC UUID GENERATOR
A Node.js module that returns random text of 128 digits of base 16.
Compatible with node express and angular ivy engine.
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
Output should be 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' long uuid (base 16 - 128 digits)
```
### TypeScript
```typescript
import generateUUID from 'smc-uuid-generator';

const newUUID = generateUUID();
```
```sh
Output should be 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' long uuid (base 16 - 128 digits)
```
### Test 
```sh
npm run test
```