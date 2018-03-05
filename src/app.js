import {aa} from "./mA.js"
import mA from "./mA.js"

console.log("aa = " + aa);
console.log("mA.aa = " + mA.aa);

mA.getDate();

// ---------------------------------------------------------------------------//
import mB from "./mB.js"
console.log(mB);

import {printX} from "./mB.js"
printX();

var legacyB = require("./mB.js");
console.log(legacyB);
