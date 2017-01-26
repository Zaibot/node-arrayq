# node-arrayq
Array query methods for Node.js

## Usage

```shell
npm install --save arrayq
```

**TypeScript - Extending Array prototype**  
```js
import 'arrayq';
[1, 2, 3, 4, 5].qIntersect([3, 4, 5, 6, 7]).qSame([3, 4, 5]) === true
```

**TypeScript - Import**  
```js
import { intersect, same } from 'arrayq/lib';
same(intersect([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), [3, 4, 5]) === true
```

**ES6 - Extending Array prototype**  
```js
require('arrayq/es6/prototype')
[1, 2, 3, 4, 5].qIntersect([3, 4, 5, 6, 7]).qSame([3, 4, 5]) === true
```

**ES6 - Require**  
```js
const { same, intersect } = require('arrayq/es6');
same(intersect([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]), [3, 4, 5]) === true
```

## Methods

**Contains**  
Check whether the first array contains all items of the right.  
`[1, 2, 3, 4, 5].qContains([1, 3, 5])` returns `true`  
`[1, 2, 3, 4, 5].qContains([4, 5, 6])` returns `false`  

**Empty**  
Same as [].length === 0  
`[].qEmpty()` returns `true`  
`[1].qEmpty()` returns `false`  

**First**  
Returns first (matching) item.  
`[1, 2, 3, 4, 5].qFirst()` returns `1`  
`[1, 2, 3, 4, 5].qFirst(x => x%2 === 0)` returns `2`  

**Last**  
Returns last (matching) item.  
`[1, 2, 3, 4, 5].qLast()` returns `5`  
`[1, 2, 3, 4, 5].qLast(x => x%2 === 0)` returns `4`  

**Intersect**  
Returns intersection of items from both arrays.  
`[1, 2, 3, 4, 5].qIntersect([3, 4, 5, 6, 7])` returns `[3, 4, 5]`  
`[1, 2, 3].qIntersect([2, 4, 7], (l, r) => l === r/2)` returns `[1, 2]`  

**Rotate**  
Rotates items using the specified offset.  
`[1, 2, 3, 4, 5].qRotate(1)` returns `[5, 1, 2, 3, 4]`  
`[1, 2, 3, 4, 5].qRotate(-1)` returns `[2, 3, 4, 5, 1]`  

**Same**  
Checks equality between two arrays (order is important).  
`[1, 2, 3].qSame([1, 2, 3])` returns `true`  
`[1, 2, 3].qSame([1, 2])` returns `false`  
`[1, 2, 3].qSame([2, 4, 6], (l, r) => l === r/2)` returns `true`  

